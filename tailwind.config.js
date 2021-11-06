module.exports = {
  purge: {
    content: [
      "./components/*.{js,jsx,ts,tsx}",
      "./pages/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
