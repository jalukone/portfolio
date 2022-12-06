/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#130F19",
        "light": "#f4fbfd",
        "gold": "#f59f4e",
        "green-accent": "#31B8AB",
        "pink-accent": "#FC6767",
        "magenta-accent": "#EC008C",
        "purple-accent": "#AF4CAB"
      },
      backgroundImage: (theme) => ({
        "gradient-one":
          // "linear-gradient(180.28deg, #FC6767 0.08%, #EC008C 49.99%, #AF4CAB 99.89%)",
          "linear-gradient(60deg, rgba(252,103,103,1) 8%, rgba(236,0,140,1) 55%, rgba(175,76,171,1) 95%)",
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
      md: "1099px",
      lg: "1279px",
      xl: "1699px",
    },
  },


  plugins: [],
}
