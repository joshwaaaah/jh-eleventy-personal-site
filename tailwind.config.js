const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.njk', './src/**/*.md'],
  theme: {
    typography: (theme) => ({
      default: {
        css: [{
          color: '#ffffff',
          h1: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          h2: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          h3: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          h4: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          h5: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          h6: {
            color: theme('colors.pink'),
            fontFamily: `${theme('fontFamily.base')}`,
            fontWeight: 'normal',
          },
          blockquote: {
            color: '#ffffff',
            fontWeight: 'normal',
            borderLeftColor: theme('colors.pink'),
          },
          'ul > li:before': {
            content: '',
            color: '#ffffff',
            width: '1rem',
            height: '1.5px',
            backgroundColor: 'transparent',
            borderRadius: '0',
            backgroundImage: `linear-gradient(transparent, transparent), linear-gradient(transparent, transparent), linear-gradient(to right, ${theme('colors.green')}, ${theme('colors.transparent')})`
          },
          'ol > li::before': {
            color: '#ffffff',
          },
          strong: {
            color: '#ffffff',
          },
          code: {
            color: theme('colors.pink'),
          },
          a: {
            color: theme('colors.pink'),
            '&:hover': {
              color: theme('colors.pink'),
            },
          },
        }],
      },
    }),
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      fontSize: {
        '6xl': '3.75rem',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        grey: '#111111',
        'grey-light': '#aeaeae',
        pink: '#E6155E',
        green: '#50E3C2',
        'green-dark': '#19a082',
        purple: '#BD10E0',
      },
      fontFamily: {
        'base': ['DMSans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: theme => ({
        focus: `0 0 0 2px ${theme('colors.pink')}`,
      }),
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'group-hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
