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
      backgroundImage: (theme) => ({
        "gradient-one":
          "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),

      fontFamily: {
        dmmono: ["DM Mono", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "479px",
      ss: "619px",
      sm: "767px",
      mm: "899px",
      md: "1059px",
      lg: "1199px",
      xl: "1699px",
    },
  },


  plugins: [],
}
