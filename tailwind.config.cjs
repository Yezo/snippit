/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Be Vietnam Pro"'],
        secondary: ['"Just Another Hand", cursive;'],
        textfont: ['"Noto Sans JP", sans-serif;'],
      },
      colors: {
        // 20232b
        primary: "#15181D",
        secondary: "#20232b",
        text: "#C2C2CC",
      },
    },
  },
  plugins: [],
};
