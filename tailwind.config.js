const { defaultConfig } = require('next/dist/server/config-shared');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    colors: {
      'primary-color': '#303030',
      'secondary-color': '#696969',
      'accent-color': '#ff0049',
      'dark-color': '#000',
      'light-color': '#fff',
      'gray-color': '#c4c4c4',
      'background-color': '#1A1A1A',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  darkMode: 'class',
};
