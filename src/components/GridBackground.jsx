export default function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}
