"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      className="relative w-40 h-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Glow animé */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
      />

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative flex overflow-hidden rounded-full w-40 h-40 border-4 border-primary/20"
      >
        <Image
          src="/images/hero.jpg"
          alt="Laura"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
