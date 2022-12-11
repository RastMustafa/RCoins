/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      hero: "url('/try.png')",
      hero2: "url('/bg-2.png')",
     
    },
    fontFamily: {
      header: ["Teko"],
      // quicksand: ["Quicksand", ...fontFamily.sans],
      display: ["Raleway"],
      body: ["Inter"],
    },
    colors: {
      whitish: "#f4f4f4",
    },
  },
  plugins: [],
});
