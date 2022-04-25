module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('img/background-pattern.svg')",
        'background-pattern-2': "url('img/questionsmarks-patterns.svg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
