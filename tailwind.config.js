/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F23872',
          150: '#F238724C',
          200: '#F0a4b1',
          250: '#F0a4b14C',
          300: '#FFE3EB',
          350: '#FFE3EB4C',
          400: '#62BAAC',
          450: '#62BAAC4C',
          500: '#FFF',
          550: '#FFFFFF4C',
        },
        social: {
          100: '#3B5998',
          150: '#3B59984C',
          200: '#833AB4',
          250: '#833AB44C',
          300: '#25D366',
          350: '#25D3664C',
        }
    },
    },
  },
  plugins: [require('daisyui')],
}