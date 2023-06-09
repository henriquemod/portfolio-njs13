/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "0rem",
        },
      },
      colors: {
        dark: "#222222",
        white: "#ffffff",
        "gray-50": "#e5e5e5",
        "gray-75": "#a7a7a7",
        "gray-100": " #383838",
        "main-25": "#e4e5ff",
        "main-50": "#bbbeff",
        "main-75": "#9498ff",
        "main-90": "#797eff",
        "main-100": " #646aff",
      },
      screens: {
        mobile: "414px",
      },
    },
  },
  plugins: [],
};
