"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="text-2xl font-bold text-white tracking-wide">
          &lt;<span className="text-blue-500">Emelda FOMENA</span>/&gt;
        </div>

        <ul className="hidden md:flex items-center gap-10 text-white text-base font-medium">
          <li>
            <Link
              href="#home"
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-opacity-90 backdrop-blur-md md:hidden py-6 px-6">
            <ul className="flex flex-col gap-6 text-white text-lg font-medium">
              <li>
                <Link href="#home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
