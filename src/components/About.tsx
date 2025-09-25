"use client";

import {
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  HardDrive,
  Settings,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full py-32 bg-gray-900 text-white">
      {/* Texte et photo */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texte gauche */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6 text-indigo-500">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Je m’appelle Laura Kuete, développeuse Fullstack passionnée par la
            création de solutions web et mobiles intelligentes et performantes.
            Titulaire d’un Master en Informatique – Science des données, je
            conçois des applications élégantes et centrées sur l’utilisateur.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Curieuse et rigoureuse, je m’intéresse particulièrement au
            développement web moderne, à l’intelligence artificielle et au
            traitement du langage naturel. Mon objectif est de transformer des
            idées complexes en produits intuitifs, fiables et performants.
          </p>

          <a
            href="/cv.pdf"
            className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-medium transition-all"
          >
            Voir mon CV
          </a>
        </div>

        {/* Photo droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/photo_2025-09-24_13-06-12.jpg"
              alt="Laura Kuete"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="container mx-auto mt-20">
        <h3 className="text-3xl font-bold text-indigo-500 mb-8">
          Mes compétences
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-gray-200">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">Développement Backend</h4>
            <p>
              Création d’API REST robustes avec Django et Django REST Framework
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">Développement Frontend</h4>
            <p>Interfaces modernes et réactives avec React.js / Next.js</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">Applications mobiles</h4>
            <p>Expérience fluide sur iOS et Android avec React Native / Expo</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">IA & NLP</h4>
            <p>
              Conception de chatbots intelligents et traitement du langage
              naturel
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
            <p>
              Déploiement et intégration continue sur des environnements cloud
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-indigo-500 transition">
            <h4 className="font-semibold mb-2">Bases de données</h4>
            <p>
              Conception et optimisation de schémas MySQL, PostgreSQL, SQLite
            </p>
          </div>
        </div>
      </div>

      {/* Technologies & outils avec Lucide */}
      <div className="container mx-auto mt-20">
        <h3 className="text-3xl font-bold text-indigo-500 mb-8">
          Technologies & outils
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-6 text-gray-300">
          <div className="flex flex-col items-center gap-2 hover:text-indigo-500 transition">
            <Code className="w-12 h-12" />
            <span className="text-sm text-center">Python / JS / TS</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-cyan-400 transition">
            <Cpu className="w-12 h-12" />
            <span className="text-sm text-center">React / Next.js</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-green-500 transition">
            <Cloud className="w-12 h-12" />
            <span className="text-sm text-center">Django / Cloud</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-yellow-400 transition">
            <Database className="w-12 h-12" />
            <span className="text-sm text-center">MySQL / PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-indigo-500 transition">
            <Smartphone className="w-12 h-12" />
            <span className="text-sm text-center">React Native / Expo</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-cyan-500 transition">
            <HardDrive className="w-12 h-12" />
            <span className="text-sm text-center">SQLite / Storage</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <Settings className="w-12 h-12" />
            <span className="text-sm text-center">Outils & DevOps</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-indigo-400 transition">
            <GitBranch className="w-12 h-12" />
            <span className="text-sm text-center">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
