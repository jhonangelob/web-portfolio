const { defaultConfig } = require('next/dist/server/config-shared');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'white-color': '#fff',
      'bg-color': '#191919',
      'primary-color': '#303030',
      'secondary-color': '#696969',
      'accent-color': '#ff0049',
      'black-color': '#060606',
      'gray-color': '#c4c4c4',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
