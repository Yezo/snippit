/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Inter", sans-serif;'],
        heading: ['"Just Another Hand", cursive;'],
      },
      colors: {
        primary: "#F1EFE9",
        secondary: "#20232b",
        text: "#282828",
      },
    },
  },
  plugins: [],
};
