import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ← IMPORTANT : ajoutez cette ligne
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2662d9",
        secondary: "#e4e6e9",
      },
    },
  },
  plugins: [],
};

export default config;
