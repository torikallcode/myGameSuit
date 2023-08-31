/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./library.html", "./kalkulator.html", "./suit2.html"],
  theme: {
    extend: {
      colors:{
        "hitam": "#222831",
        "putih": "#EEEEEE"
      },
      fontFamily:{
        'utama': ['Poppins, sans-serif'],
        'suit2':['Bungee, cursive']
      }
    },
  },
  plugins: [],
};
