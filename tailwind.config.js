/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('/bg.png')",
      'hero2': "url('/bg-2.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}