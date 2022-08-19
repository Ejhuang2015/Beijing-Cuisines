/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beijing-red': '#ED2F1F'
      }
    },
  },
  plugins: [],
}