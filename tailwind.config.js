/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/screen/HomeScreen.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#18181B",
        "primary-200": "#262626",
        "yellow-500": "#C79B00",
      },
    },
  },
  plugins: [],
};
