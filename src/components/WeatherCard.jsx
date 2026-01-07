export default function WeatherCard({ weather, mood, moodBackgrounds }) {
  if (!weather) return null;

  const bgImage = moodBackgrounds?.[mood];

  return (
    <div
      className="rounded-2xl p-10 text-center space-y-3 shadow-md text-text border border-surface"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-3xl font-semibold">{mood}</p>

      <p className="text-xl">
        {weather.weather[0].main} • {weather.main.temp}°C • {weather.name}
      </p>

      <span className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-accent text-bg">
        {mood}
      </span>
    </div>
  );
}
