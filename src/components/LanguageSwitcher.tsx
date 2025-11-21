"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  const switchLanguage = (lang: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${lang}${pathWithoutLocale}`);
    setLangOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-sm font-medium dark:text-secondary hover:text-primary transition-colors"
        onClick={() => setLangOpen((prev) => !prev)}
      >
        <Globe size={18} /> {locale.toUpperCase()}
      </button>

      {langOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-slate-900 shadow-lg rounded-lg py-2 w-28 border border-gray-200 dark:border-slate-700">
          <button
            onClick={() => switchLanguage("en")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium dark:text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            🇺🇸 EN
          </button>
          <button
            onClick={() => switchLanguage("fr")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium dark:text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            🇫🇷 FR
          </button>
        </div>
      )}
    </div>
  );
}
