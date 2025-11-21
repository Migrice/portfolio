"use client";

import { motion } from "framer-motion";

export default function CubeWithImages() {
  // images pour chaque face
  const images = [
    "/images/hero.jpg",
    "/images/hero.jpg",
    "/images/about2.jpg",
    "/images/about2.jpg",
    "/images/about.jpg",
    "/images/about.jpg",
  ];

  // fonction pour positionner chaque face du cube
  const cubeFaceTransform = (index: number) => {
    const distance = 128; // moitié de la taille du cube (w-64 = 256px)
    switch (index) {
      case 0:
        return `rotateY(0deg) translateZ(${distance}px)`;
      case 1:
        return `rotateY(90deg) translateZ(${distance}px)`;
      case 2:
        return `rotateY(180deg) translateZ(${distance}px)`;
      case 3:
        return `rotateY(-90deg) translateZ(${distance}px)`;
      case 4:
        return `rotateX(90deg) translateZ(${distance}px)`;
      case 5:
        return `rotateX(-90deg) translateZ(${distance}px)`;
      default:
        return "";
    }
  };

  return (
    <div className="w-64 h-64 mx-auto perspective-800 relative">
      <motion.div
        className="w-full h-full relative transform-style-preserve-3d"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute w-full h-full backface-hidden"
            style={{
              transform: cubeFaceTransform(i),
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </motion.div>

      <style jsx>{`
        .perspective-800 {
          perspective: 800px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
