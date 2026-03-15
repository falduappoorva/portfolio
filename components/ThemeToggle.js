'use client';

import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const nextTheme = saved === 'light' || saved === 'dark' ? saved : 'dark';
      setTheme(nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    } catch {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore localStorage errors in private mode.
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-2 rounded-full border border-line/40 bg-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text transition hover:border-cyan/60 hover:text-cyan"
    >
      {isDark ? <SunMedium size={15} /> : <MoonStar size={15} />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
