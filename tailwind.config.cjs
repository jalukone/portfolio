/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1c292f",
        "light": "#f4fbfd",
        "gold": "#f59f4e",
        "pink-dark": "#ff7576"
      },

      fontFamily: {
        dmmono: ["DM Mono", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },

  },

  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
}
