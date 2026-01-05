export default function TopLines() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-24 h-[3px] rounded-full"
        style={{ backgroundColor: "#A31D1D" }}
      />
      <div
        className="w-12 h-[3px] rounded-full"
        style={{ backgroundColor: "#A31D1D", opacity: 0.7 }}
      />
    </div>
  );
}
