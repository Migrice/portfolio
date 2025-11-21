"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#experiences", key: "experiences" },
  { href: "#contact", key: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="/">
            <span className="text-xl font-bold text-primary">EF.</span>
          </a>

          <div className="hidden md:flex items-center md:space-x-10 lg:space-x-14">
            <div className="flex items-center md:space-x-5 lg:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm font-medium dark:text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            <div className="flex items-center md:space-x-5 lg:space-x-7">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <ResumeButton />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button
              className="p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg rounded-b-lg mt-1 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="block px-3 py-2 text-base font-medium dark:text-secondary hover:text-primary transition-colors cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="px-3 pt-2">
              <ResumeButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1UK5AFN_cqMhzX9nhRCu4PtdUqt_KZwUb/view"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-white dark:text-black hover:bg-primary/90 shadow-[0_0_15px_rgba(38,98,217,0.3)] hover:shadow-[0_0_25px_rgba(38,98,217,0.4)] h-9 rounded-md px-4"
    >
      Resume
    </a>
  );
}
