/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          600: '#00B7B4', // Light mode cyan for headings, buttons, borders
        },
        purple: {
          600: '#7C3AED', // Light mode purple for gradients, particles
        },
        gray: {
          600: '#4B5563', // Light mode gray for particles, animations
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with 'dark' class
  plugins: [],
};