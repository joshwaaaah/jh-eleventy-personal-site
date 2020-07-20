const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.liquid', './src/**/*.md'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        grey: '#111111',
        'grey-light': '#aeaeae',
        pink: '#F63D7D',
        green: '#50E3C2',
        purple: '#BD10E0',
      },
      fontFamily: {
        'avenir-roman': ['Avenir Roman', ...defaultTheme.fontFamily.sans],
        'avenir-light': ['Avenir Light', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: theme => ({
        focus: `0 0 0 2px ${theme('colors.pink')}`,
      }),
    },
  },
  variants: {},
  plugins: [],
};
