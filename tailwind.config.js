const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.njk', './src/**/*.md'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: '#ffffff',
          h1: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          h2: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          h3: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          h4: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          h5: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          h6: {
            color: theme('colors.pink'),
            fontWeight: 'normal',
          },
          blockquote: {
            color: '#ffffff',
            fontWeight: 'normal',
            borderLeftColor: theme('colors.pink'),
          },
          'ul > li::before': {
            color: '#ffffff',
          },
          'ol > li::before': {
            color: '#ffffff',
          },
          strong: {
            color: '#ffffff',
          },

          a: {
            color: '#ffffff',
            '&:hover': {
              color: '#ffffff',
            },
          },
        },
      },
    }),
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
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'group-hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
