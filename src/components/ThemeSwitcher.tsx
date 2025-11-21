"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

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
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="hover:text-primary dark:text-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
