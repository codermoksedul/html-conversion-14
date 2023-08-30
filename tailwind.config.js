/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'p-color' : '#39DB4A',
        's-color' : '#000000',
        'bg-color' : '#FFFFFF',
        'txt-color' : '#000000',
      },
    },
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
  },
  plugins: [],
}