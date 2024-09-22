/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",'./src/components/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        switzer:'Switzer',
        ibm: 'IBM Plex Mono',
        libre:'Libre Caslon Text',
        bebas:'Bebas Neue'
      }
    },
  },
  plugins: [],
}

