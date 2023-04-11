/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  jit: true,
  darkMode: false,
  theme: {
    screens: {
      xs: '435px',
      ...defaultTheme.screens
    },
    extend: {}
  },
  plugins: []
}
