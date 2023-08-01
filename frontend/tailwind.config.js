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
  'red': {
    '50': '#fff0f0',
    '100': '#ffdede',
    '200': '#ffc3c3',
    '300': '#ff9a9a',
    '400': '#ff6060',
    '500': '#ff2f2f',
    '600': '#ed0c0c',
    '700': '#cd0808',
    '800': '#a90b0b',
    '900': '#8b1111',
    '950': '#4c0303',
},

},
    extend: {
     
    },
  },
variants: {
 backgroundColor:['responsive','hover','focus','active']
}, 
  plugins: [  
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),                
  ],
}
