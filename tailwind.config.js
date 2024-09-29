/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F9D9AA",
        black: "#2F2105",
        primary: "#FF902A",
      },
    },
  },
  plugins: [],
};
