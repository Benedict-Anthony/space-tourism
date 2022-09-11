/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    screens: {
      xl: "1440px",
      lg: "1200px",
      md: "625px",
      sm: "575px",
    },
    extend: {
      colors: {
        white: '#fff',
        lightBlue: "#233c63",
        grayLight: '#d3dce6',
      },
    },
  },
  plugins: [],
}
