module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'almost-screen': 'calc(-16rem + 100ch)'
      }
    },
  },
  plugins: [],
}