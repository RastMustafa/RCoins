/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      hero: "url('/bg.png')",
      hero2: "url('/bg-2.png')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
    fontFamily: {
      header: ["Teko"],
      // quicksand: ["Quicksand", ...fontFamily.sans],
      display: ["Raleway"],
      body: ["Inter"],
    },
  },
  plugins: [],
};
