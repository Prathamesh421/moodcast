export default function WeatherCard({ weather, mood, moodBackgrounds }) {
  if (!weather) return null;

  const bgImage = moodBackgrounds?.[mood];

  return (
    <div
      className="rounded-2xl p-10 text-center space-y-3 shadow-md"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        border: "1px solid #E7DFD6",
        backgroundSize: "cover",
        imageRendering: "pixelated",
        backgroundPosition: "center",
        color: "#FAF6F0",
      }}
    >
      <p className="text-3xl font-semibold">{mood}</p>

      <p className="text-xl">
        {weather.weather[0].main} • {weather.main.temp}°C • {weather.name}
      </p>

      <span
        className="inline-block px-6 py-2 rounded-full text-sm font-medium"
        style={{
          backgroundColor: "#A31D1D",
          color: "#FEF9E1",
        }}
      >
        Mood: {mood}
      </span>
    </div>
  );
}
