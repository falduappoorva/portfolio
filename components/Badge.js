export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-line/35 bg-surface/65 px-3 py-1 text-sm text-text/90 backdrop-blur">
      {children}
    </span>
  );
}
