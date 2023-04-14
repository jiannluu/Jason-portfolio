const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  jit: true,
  darkMode: false,
  theme: {
    screens: {
      xxs: '300px',
      xs: '435px',
      ...defaultTheme.screens
    },
    extend: {
      boxShadow: {
        'blob-shadow': '0px 0px 15px rgba(0, 0, 0, 0.2)'
      },
      animation: {
        'blob-smooth': 'blob 3.7s linear infinite'
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%'
          },
          '33%': {
            borderRadius: '42% 28% 48% 48% / 28% 28% 72% 72%'
          },
          '66%': {
            borderRadius: '100% 56% 56% 100% / 100% 100% 56% 56%'
          }
        }
      }
    }
  },
  plugins: [
    // adding current variant to have the component stay as active
    plugin(function ({ addVariant }) {
      addVariant('current', '&.active')
    })
  ]
}
