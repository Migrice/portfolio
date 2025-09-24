"use client";

import type { Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#011028" },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}
