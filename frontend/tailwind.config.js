const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
    'violet': {
      '50': '#fbf5ff',
      '100': '#f5e8ff',
      '200': '#ecd5ff',
      '300': '#deb4fe',
      '400': '#c983fd',
      '500': '#b554f8',
      '600': '#9920e9',
      '700': '#8b21cf',
      '800': '#7620a9',
      '900': '#601c87',
      '950': '#420764',
  },
},
    extend: {},
  },
variants: {
 backgroundColor:['responsive','hover','focus','active']
}, 
  plugins: [  require('flowbite/plugin') ],
}
