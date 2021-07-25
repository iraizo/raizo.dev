module.exports = {
  purge: {
    content: ['./public/*.html'],
    enabled: true
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cpink: '#D56AA0',
        cbg:   '#22223B'
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
