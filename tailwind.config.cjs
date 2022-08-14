/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        ellipse: "url(/src/assets/ellipse-9.png)",
        logos: "url(/src/assets/logos.png)",
      },
      fontFamily: {
        sans: "Manrope, sans-serif",
      },
      colors: {
        green: {
          400: "#65E4A3",
        },
        sky: {
          500: "#0DBBFC",
        },
        blue: {
          400: "#8FB6D5",
          900: "#0A2640",
        },
        gray: {
          50: "#FFFFFF",
          200: "#F1F1F1",
          400: "#c4c4c4",
          600: "#777777",
        },
      },
    },
  },
  plugins: [],
};
