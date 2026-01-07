export default function Header() {
  return (
    <header className="text-center space-y-2">
      <h1 className="text-5xl font-bold text-text">MoodCast 🌦️</h1>
      <p  className="text-weather" style={{ opacity: 0.8 }}>
        Weather-based food & movie recommendations
      </p>
    </header>
  );
}
