/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      '2xl': "1650px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
