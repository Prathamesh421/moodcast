export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex justify-center gap-3">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-80 px-4 py-3 rounded-md focus:outline-none"
        style={{
          backgroundColor: "#FEF9E1",
          color: "#6D2323",
          border: "1px solid #6D2323",
        }}
        placeholder="Enter city (e.g. Mumbai)"
      />
      <button
        type="button"
        onClick={onSearch}
        className="px-6 py-3 rounded-md font-medium"
        style={{
          backgroundColor: "#A31D1D",
          color: "#FEF9E1",
        }}
      >
        Search
      </button>
    </div>
  );
}
