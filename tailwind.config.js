/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      hero: "url('/regesteration.png')",
      hero2: "url('/blob.png')",
      layer1: "url('/blob0000.png')",
      layer2: "url('/blob0001.png')",
      layer3: "url('/blob0002.png')",
      layer4: "url('/blob0003.png')",
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
