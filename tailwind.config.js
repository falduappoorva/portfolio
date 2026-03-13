/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B1220',
        surface: '#111827',
        panel: '#0F172A',
        cyan: '#00E5FF',
        orange: '#FF6B00',
        text: '#E5EEF8',
        muted: '#94A3B8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,229,255,0.08), 0 20px 60px rgba(0,0,0,0.35)',
        accent: '0 0 40px rgba(0,229,255,0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(0,229,255,0.18), transparent 35%), radial-gradient(circle at 85% 15%, rgba(255,107,0,0.16), transparent 30%), linear-gradient(180deg, #0B1220 0%, #0F172A 100%)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
