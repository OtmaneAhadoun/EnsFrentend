/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        webFont: "Outfit",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
