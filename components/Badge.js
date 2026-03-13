export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-text/90 backdrop-blur">
      {children}
    </span>
  );
}
