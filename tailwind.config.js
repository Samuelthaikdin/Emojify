/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0,240,255)",
      },
      colors: {
        'off-white': '#FDF0D5',
      },
    },
  },
  plugins: [],
};
