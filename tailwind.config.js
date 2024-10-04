/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "10px",
      md: "14px",
      l: "16px",
      xl: "18px",
      xxl: "24px",
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        light: {
          bg: "#f1e8e8",
          surface: "#f9f9f9",
          surface2: "#f7f7f7",
        },
        dark: {
          bg: "#1a1a1a",
          surface: "#212121",
          surface2: "#313131",
        },
      },
    },
  },
  plugins: [],
};
