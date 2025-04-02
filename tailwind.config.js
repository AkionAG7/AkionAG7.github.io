/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBG: "#1A1919",
        darkCard: "#1E1E1E",
        dark: "#F472B6",
        lightCArd: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
