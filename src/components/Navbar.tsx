"use client";

import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [langOpen, setLangOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "home", href: "/" },
    { label: "about", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const switchLanguage = (lang: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${lang}${pathWithoutLocale}`);
    setLangOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          &lt;Emelda Kuete/&gt;
        </Link>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
              onClick={() => setLangOpen((prev) => !prev)}
            >
              <Globe size={20} /> {locale.toUpperCase()}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 w-28">
                <button
                  onClick={() => switchLanguage("en")}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => switchLanguage("fr")}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇫🇷 FR
                </button>
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300"
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-black/80 backdrop-blur-lg shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 text-lg font-medium"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}

            <div className="pt-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                Language
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-4 py-2 rounded border ${
                    locale === "en"
                      ? "border-blue-500 text-blue-600"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  🇺🇸 EN
                </button>

                <button
                  onClick={() => switchLanguage("fr")}
                  className={`px-4 py-2 rounded border ${
                    locale === "fr"
                      ? "border-blue-500 text-blue-600"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  🇫🇷 FR
                </button>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="mt-4 flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
