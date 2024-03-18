/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        deepDark: "#121212",
        mediumDark: "#1e1e1f",
        lighterDark: "#232324",
        mediumYellow: "#ffdb70",
        lighterYellow: "#ffda70",
        darkYellow: "#ffbc5c",
        textGray: '#d6d6d6'
      },
    },
  },
  plugins: [],
};
