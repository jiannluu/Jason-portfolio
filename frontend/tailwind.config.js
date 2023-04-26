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
        'blob-smooth': 'blob 3.7s linear infinite',
        'bounce-left': 'bounceLeft 1s infinite',
        'bounce-right': 'bounceRight 1s infinite',
        'background-blob': 'backgroundBlob 7s infinite'
      },
      keyframes: {
        // blob animation keyframes
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
        },
        // bounce left animation keyframes
        bounceLeft: {
          '0%, 100%': {
            transform: 'translateX(-25%)'
          },
          '50%': {
            transform: 'translateX(0)'
          }
        },
        // bounce right animation key frames
        bounceRight: {
          '0%, 100%': {
            transform: 'translateX(25%)'
          },
          '50%': {
            transform: 'translateX(0)'
          }
        },
        // background blob animation
        backgroundBlob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
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
