/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible : true})
  ],
}
