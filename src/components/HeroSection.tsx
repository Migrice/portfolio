"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-20 max-w-7xl mx-auto px-6 py-24 text-white">
      {/* Colonne gauche */}
      <div className="max-w-lg flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight">
          Hello, I&apos;m{" "}
          <span className="text-indigo-500">Emelda Migrice 🚀</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light leading-snug">
          Fullstack Developer & Data Scientist
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-6">
          I build smart, performant and elegant web applications that make use
          of AI
          <br />
          <a
            href="/cv.pdf"
            className="text-indigo-500 font-medium hover:underline"
          >
            View my Resume
          </a>
        </p>

        <div className="flex flex-wrap gap-6 mt-4">
          <a
            href="#contact"
            className="px-8 py-3 border border-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-medium transition-all"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>

      {/* Colonne droite - Photo */}
      <div className="flex justify-center md:justify-end w-64 md:w-80">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-500">
          <Image
            src="/images/photo_2025-09-24_13-06-12.jpg"
            alt="Laura Kuete"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
