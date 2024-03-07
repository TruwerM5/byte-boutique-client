/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mavenpro': ['"Maven Pro"']
    },
    colors: {
      'primary': '#2D4F8E',
      'primary-dark': '#1d3561'
    }
  },
  plugins: [],
}

