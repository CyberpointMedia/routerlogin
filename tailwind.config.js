/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js}",
      "./node_modules/preline/dist/*.js"
  ],
  
  theme: {
    extend: {      
      backgroundColor: {
        red: '#EF4444',
        green: '#22C55E',
        black: '#27272A',
      },
      colors: {
        red: '#EF4444',
      },
      boxShadow: {
        'custom': '0px 4px 15px 0px rgba(0, 0, 0, 0.15)', // Corrected custom box shadow
      },
    },
    container: {
      center: true, // Ensure the container is centered
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        xl: '1170px', // Set container max-width for xl screen size
      },
    },
    fontFamily: {
      'aeonik': ['aeonik_trialregular', 'sans-serif'],
    },
  },
  plugins: [
    require('preline/plugin')
  ],
};

