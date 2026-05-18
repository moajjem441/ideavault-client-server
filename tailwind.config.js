const { heroui } = require("@heroui/react"); // ba @nextui-org/react

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // HeroUI theme content paths
  ],
  darkMode: "class", // 👈 ETI THAKTEI HOBE! Na thakle dark theme effect dekhba na
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};