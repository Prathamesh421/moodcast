export default function WeatherCard({ weather, mood, weatherBackgrounds }) {
  if (!weather) return null;

  const condition = weather.weather[0].main;
  const bgImage = weatherBackgrounds[condition];

  return (
    <div
      className="rounded-2xl p-10 text-center space-y-3 shadow-md"
      style={{
        backgroundImage: bgImage
          ? `linear-gradient(
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.35)
            ), url(${bgImage})`
          : "#3A3A3A",
        border: "1px solid #E7DFD6",
        backgroundSize: "cover",
        imageRendering: "pixelated",
        backgroundPosition: "center",
        color: "#FAF6F0",
      }}
    >
      <p className="text-3xl font-semibold">{condition}</p>

      <p className="text-xl">
        {weather.main.temp}°C • {weather.name}
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
