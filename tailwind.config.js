module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cerise-red': {
          '50': '#fef6f8',
          '100': '#fdedf1',
          '200': '#fbd1db',
          '300': '#f9b5c5',
          '400': '#f47e9a',
          '500': '#ef476f',
          '600': '#d74064',
          '700': '#b33553',
          '800': '#8f2b43',
          '900': '#752336'
        }
      },
      fontSize: {
        'custom-lg': '15rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
