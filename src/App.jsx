import TopLines from "./components/TopLines";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FoodSection from "./components/FoodSection";
import MovieSection from "./components/MovieSection";
import { useState } from "react";
import clear from "./assets/weather/clear.png";
import cloudy from "./assets/weather/clouds.png";
import rain from "./assets/weather/rainy.png";
import snow from "./assets/weather/snow.png";
import thunder from "./assets/weather/thunder.png";

const getMoodFromWeather = (condition, temp) => {
  if (condition === "Snow" || condition === "Fog" || temp <= 10) {
    return "Lazy";
  }

  if (condition === "Rain") {
    return "Cozy";
  }

  if (condition === "Clear" && temp >= 25) {
    return "Energetic";
  }

  return "Chill";
};

const moodBackgrounds = {
  Energetic: clear,
  Chill: cloudy,
  Cozy: rain,
  Lazy : snow,
  Thunderstorm: thunder,
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [mood, setMood] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      // 1️⃣ City → latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      // 2️⃣ Get current weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const temp = weatherData.current_weather.temperature;
      const code = weatherData.current_weather.weathercode;

      const condition = getConditionFromCode(code);

      setWeather({
        name,
        weather: [{ main: condition }],
        main: { temp },
      });

      setMood(getMoodFromWeather(condition, temp));
    } catch (err) {
      console.error("Weather error:", err.message);
    }
  };

  const getConditionFromCode = (code) => {
    if (code === 0) return "Clear";
    if ([1, 2, 3].includes(code)) return "Clouds";
    if ([45, 48].includes(code)) return "Fog";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "Rain";
    if ([71, 73, 75].includes(code)) return "Snow";
    if ([95].includes(code)) return "Thunderstorm";
    return "Clouds";
  };

  return (
    <div
      className="min-h-screen  bg-bg flex justify-center items-start py-12"
    >
      {/* App Container */}
      <div
        className="w-full bg-surface text-text max-w-6xl rounded-2xl p-10 space-y-12 shadow-lg"
      >
        <TopLines />
        <Header />
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        <WeatherCard
          weather={weather}
          mood={mood}
          moodBackgrounds={moodBackgrounds}
        />
        <FoodSection mood={mood} />
        <MovieSection mood={mood}/>
      </div>
    </div>
  );
}

export default App;
