/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {  
    extend: {
      keyframes:{
        typing:{
          'from':{'width':'0px'}
        },
        blink:{
          '50%':{'border-color':'transparent'}
        }
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      aspectRatio:{
        '16/8':'16/8',
      }
    },
  },
  plugins: [],
}
