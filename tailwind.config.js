/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // prev: '#7286D3'
        // prev2: '#FAFFAF'
        // prev3: '#FFB200'

        // primary: "#FFC100",
        // primary: "#A0DEFF",
        primary: "#FFB534",
        deepDark: "#121212",
        mediumDark: "#1e1e1f",
        textGray: "#d6d6d6",
      },
    },
  },
  plugins: [],
};
