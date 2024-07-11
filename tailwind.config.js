/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./htmlfiles/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',  // Custom breakpoint for mobile
        'desktop': '1280px' // Custom breakpoint for desktop
      },
    },
  },
  plugins: [require('daisyui'),],
}

