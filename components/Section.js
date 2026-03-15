export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-20 md:px-10 ${className}`}>
      <div className="mx-auto max-w-content">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
