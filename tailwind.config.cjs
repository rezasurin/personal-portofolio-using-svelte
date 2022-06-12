module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'charis': ["'Charis SIL'", 'serif']
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
};