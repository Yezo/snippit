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
        // #15181d primary
        // #20232b secondary
        // #c2c2cc text
        primary: "#ECECEC",
        secondary: "#20232b",
        text: "#15181d",
        accent: "#7AB9E0",
      },
    },
  },
  plugins: [],
};
