/** @type {import('tailwindcss').Config} */
module.exports = {
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
        notoSerifDisplay: ['var(--noto-serif-display)']
        // raleway: ['var(--raleway)']
      }
    }
  },
  plugins: []
}
