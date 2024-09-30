/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#7E7D7A",
        glass: "#ffffff70",
        secondary: "#2F2105",
        primary: "#FF902A",
        accent: "#F9D9AA",
        cream: "#F6EBDA",
      },
    },
  },
  plugins: [],
};
