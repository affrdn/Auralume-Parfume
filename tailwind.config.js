// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        gold: "#D4AF37",
        charcoal: "#2D2D2D",
        stone: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
