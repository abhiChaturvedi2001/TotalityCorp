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
        'lg': {'max' : '968px'},
        'md': {'max': '550px'},
        'sm':{'max' : '420px'},
        's': {'max' : '350px'},
      }
    },
  },
  plugins: [],
}

