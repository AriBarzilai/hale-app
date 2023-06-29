/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './App.js',
  ],
  theme: {
    colors: {
      ...colors
    },
    extend: {},
  },
  plugins: [],
}

