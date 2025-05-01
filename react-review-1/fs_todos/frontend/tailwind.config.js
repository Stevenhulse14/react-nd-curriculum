/** @type {import('tailwindcss').Config} */
module.exports = {
  // all areas that you want your css applied too
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // you can specify what your Primary, Secondary..
  // all types of styling
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF69B4", // hot pink
          dark: "#e858a6",
          light: "#ff85c1",
        },
        secondary: {
          DEFAULT: "#FFD700", // golden yellow
          dark: "#d4b200",
          light: "#ffe55c",
        },
        neutral: {
          dark: "#1a1a1a", // dark gray
          medium: "#3a3a3a",
          light: "#d4d4d4",
        },
      },
    },
  },
  plugins: [],
};
