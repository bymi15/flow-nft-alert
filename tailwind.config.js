/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#171447',
        secondary: '#333755',
        highlight: {
          DEFAULT: '#243dae',
          100: '#2946c5',
        },
        dark: '#060B27',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Roboto Mono', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
