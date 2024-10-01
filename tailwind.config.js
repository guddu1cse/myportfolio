/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        gradient: {
          'from': '#6B21A8',
          'via': '#DB2777',
          'to': '#E11D48',
        },
      },
      borderImage: {
        'gradient': 'linear-gradient(90deg, #ff00cc, #3333ff, #00ffcc, #ff0000) 1',
      },
      animation: {
        'border-move': 'borderMove 3s linear infinite',
      },
      keyframes: {
        borderMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};

