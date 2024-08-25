/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
    
  theme: {
    extend: {
      content:{
        about:'url(./about.svg)',
        portfolio:'url(./portfolio.svg)',
      },
    },
  },
  plugins: [
    flowbite.content(),
  ],
}

