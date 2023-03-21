/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-green": "#254F1A",
        "theme-lime": "#D2E823",
        "theme-pink": "#E9C0E9",
        "theme-lavender": "#502274",
        "theme-maroon": "#780016",
        "theme-cyan": "#02ACC4",
        "theme-dark": "#1E2330",
        "theme-light": "#EFF0EC",
      }
    },
  },
  plugins: [],
}
