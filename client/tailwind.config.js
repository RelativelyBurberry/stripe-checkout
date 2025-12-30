/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#171717",
        accent: "#F25623",
        darkGray: "#4D4D4D",
        lightGray: "#DEDEDE",
      },
       animation: {
            "spin-slow": "spin 6s linear infinite",
        },
    },
  },
  plugins: [],
};
