/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFD65B'
      },
      fontFamily: {
        playfair: ['var(--playfair)'],
        karla: ['var(--karla)']
      }
    }
  },
  plugins: []
}
