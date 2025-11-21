"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);

    const newTheme = theme === "light" ? "dark" : "light";

    setTimeout(() => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    }, 150);

    // Reset animation
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 overflow-hidden group"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute inset-0 rounded-full bg-primary/20 transform transition-transform duration-500 ease-out ${
          isAnimating ? "scale-100 opacity-0" : "scale-0 opacity-100"
        }`}
      />

      <span className="relative block">
        <Sun
          size={18}
          className={`absolute inset-0 transform transition-all duration-300 ease-out text-amber-500 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />

        <Moon
          size={18}
          className={`transform transition-all duration-300 ease-out text-slate-700 dark:text-slate-300 ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
