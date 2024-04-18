/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // deepDark: "#121212",
        // mediumDark: "#1e1e1f",
        // lighterDark: "#232324",
        // mediumYellow: "#ffdb70",
        // primary: "#ffda70",
        // primary: "#ffbc5c",
        // textGray: '#d6d6d6'

        // prev: '#7286D3'
        deepDark: "#121212",
        mediumDark: "#1e1e1f",
        primary: "#9ED5C5",
        textGray: "#d6d6d6",
      },
    },
  },
  plugins: [],
};
