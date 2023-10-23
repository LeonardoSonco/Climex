/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend:{
    backgroundImage: {
      'london': "url('./src/image/bg/london.jpeg')",
    },
  }
}



