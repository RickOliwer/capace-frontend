module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'almost-screen': 'calc(-16rem + 100ch)'
      },
      colors: {
        capace: {
          dark: '#191919',
          light: '#fff',
          oranges: '#FF752E'
        }
      }
    },
  },
  plugins: [],
}