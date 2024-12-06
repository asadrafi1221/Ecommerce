/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F54',  // Replace with your exact Navy Blue
        orange: '#FFA500', // Replace with your exact Orange
      },
    },
  },
  plugins: [],
}

