/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', "sans-serif"]
      },
      colors:{
        zapayGreen: "#024E4C",
        bgWhite: "#FBF6F2"
      }
    },
  },
  plugins: [],
}

