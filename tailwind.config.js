/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', "sans-serif"],
        "Roboto": ['Roboto', "sans-serif"],
      },
      screens: {
        'xl': {'max': '1100px'},
        'lg': {'max' : '988px'},
        'md': {'max': '750px'},
        'sm':{'max' : '520px'},
        's': {'max' : '380px'},
      }
    },
  },
  plugins: [],
}

