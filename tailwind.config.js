/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nhiquela: {
          dark: "#0a0f1c", // Deep dark blue background
          card: "#111827", // Slightly lighter blue-gray for cards
          cyan: "#00f0ff", // Neon Cyan
          purple: "#bd00ff", // Neon Purple
          pink: "#ff00aa", // Neon Pink/Magenta for accents
          gold: "#CCA43B", // Premium Gold
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
