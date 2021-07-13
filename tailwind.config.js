module.exports = {
  darkMode: 'class', // or 'media' or 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fill: {
      current: 'currentColor'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    }
  },
  plugins: []
}
