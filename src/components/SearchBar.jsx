export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex justify-center gap-3">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-bg border border-surface text-text focus:outline-none focus:ring-2 focus:ring-accent w-80 px-4 py-3 rounded-md focus:outline-none"
        placeholder="Enter city (e.g. Mumbai)"
      />
      <button
        type="button"
        onClick={onSearch}
        className="bg-accent text-bg hover:opacity-90 px-6 py-3 rounded-md font-medium"
      >
        Search
      </button>
    </div>
  );
}
