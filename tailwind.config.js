module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'junicode': ['Junicode', 'Times New Roman', 'serif']
      }
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')   // first-party plugin
  ],
}
