/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        purple: ["#7364d2"],
        primary: ["#1b2021"],
        secondary: ["#343a40"],
      },
    },
  },
  plugins: [],
};
