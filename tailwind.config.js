/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1E1E1E",
        warmWhite: "#F8F6F2",
        taupe: "#D6CFC5",
        forest: "#3C5A44",
        wood: "#8B5E3C",
        mist: "#C4C4C4",
        copper: "#C98C5C",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.15)",
      },
      backdropBlur: {
        12: "12px"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
