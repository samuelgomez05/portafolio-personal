/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#17191E',
        'secondary': '#242731',
        'tertiary': '#2b314b',
        'accent': '#00FF22',
      },
    },
  },
  plugins: [],
}

