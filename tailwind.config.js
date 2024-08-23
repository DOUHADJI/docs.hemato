/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        'danger' : "#9e1c2e"
      }
    },
  },
  plugins: [
    nextui()
  ],
}
