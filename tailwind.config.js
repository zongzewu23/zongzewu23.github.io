/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        England: ['Playwrite GB S', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

