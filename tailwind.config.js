/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        globo: ["'Dela Gothic One'", "cursive"], // ejemplo de fuente redondeada
      },
      colors: {
        dorado: {
          light: "#FFD700",
          DEFAULT: "#DAA520",
          dark: "#B8860B",
        },
      },
    },
  },
  plugins: [],
};
