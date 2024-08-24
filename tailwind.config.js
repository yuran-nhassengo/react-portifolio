/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      content:{
        about:'url(./about.svg)',
        portfolio:'url(./portfolio.svg)',
      },
    },
  },
  plugins: [],
}

