/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#1A191F",
        crossGrey: "#9C9C9C",
        lightPurple: "#7D86EB",
        textGrey: "#B5B4BA",
        mediumGrey: "#313133",
        lightGreen: "#58C778",
        lightRed: "#FD5356",
        lightYellow: "#F8C255",
        textWhite: "#FDFDFD",
      },
    },
  },
  plugins: [],
};
