/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0081a7",
        "primary-dark": "#184e77",
        light: "#fdfcdc",
        "dark-black": "#0e0e0f",
        "dark-grey": "#212427",
      },
      animation: {
        'spin-slow': 'spin .5s linear'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
