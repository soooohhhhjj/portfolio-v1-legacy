/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        maven: ['Maven Pro', 'sans-serif'], 
        jura: ['Jura', 'sans-serif'], 
        oxanium: ['Oxanium', 'sans-serif'], 
        anta: ['Anta', 'sans-serif'], 
        audiowide: ['Audiowide', 'sans-serif'], 
        bruno: ['Bruno Ace SC', 'sans-serif'], 
        sansation: ['Sansation', 'sans-serif'], 
        zalando: ['Zalando Sans Expanded', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
