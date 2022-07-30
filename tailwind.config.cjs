/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/)",
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
          600: "#777777",
        },
      },
    },
  },
  plugins: [],
};
