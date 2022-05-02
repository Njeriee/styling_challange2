const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './index.html'],
  theme: {
    screens: {
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#5ECD76',
      'white': '#ffffff',
      'black': 'black',
      'grey': '#9CA3AF',
      'orange': '#EA580C',
    },
    extend: {
      backgroundImage: {
        'split-white-green': "linear-gradient(to bottom, white 25%, #5ECD76 0%);"
      }
    }
  },
  plugins: [],
}
