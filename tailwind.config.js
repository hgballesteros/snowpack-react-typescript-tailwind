module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ch-pink': '#FFE1E1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
