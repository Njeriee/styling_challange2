
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
      'primary': 'rgb(148, 196, 168)',
      'white': '#ffffff',
      'black': 'black',
      'grey': '#E7E5E4',
      'orange': '#EA580C',
    },
    extend: {
      backgroundImage: {
        'split-white-green': "linear-gradient(to bottom, white 25%, rgb(148, 196, 168) 0%);"
      }
    }
  },
  plugins: [],
}
