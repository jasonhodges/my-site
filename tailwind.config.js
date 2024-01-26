// const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['forest', 'nord'],
  },
};
