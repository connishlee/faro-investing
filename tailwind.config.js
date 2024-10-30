/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInDelay1: "fadeIn 1s ease-out forwards 0.5s", // Delay for search bar
        fadeInDelay2: "fadeIn 1s ease-out forwards 1s", // Delay for table
        fadeInDelay3: "fadeIn 1s ease-out forwards 1.5s", // Delay for graph
      },
    },
  },
  plugins: [],
};
