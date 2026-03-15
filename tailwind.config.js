/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        cyan: 'rgb(var(--cyan) / <alpha-value>)',
        orange: 'rgb(var(--orange) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--line) / 0.5), 0 24px 64px rgb(var(--shadow) / 0.28)',
        accent: '0 0 48px rgb(var(--cyan) / 0.24)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 8% 8%, rgb(var(--cyan) / 0.2), transparent 32%), radial-gradient(circle at 84% 12%, rgb(var(--orange) / 0.16), transparent 28%), radial-gradient(circle at 60% 100%, rgb(var(--cyan) / 0.08), transparent 45%), linear-gradient(180deg, rgb(var(--bg)) 0%, rgb(var(--panel)) 100%)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
