/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(121, 184, 229)',
          200: 'rgb(56, 136, 194)',
          300: 'rgb(6, 83, 138)',
          400: 'rgb(41, 50, 90)',
        }
      }
    },
  },
  plugins: [],
} 