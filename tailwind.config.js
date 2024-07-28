/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "laptop-image": "url('../assets/compu3.jpg')"
      },
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

