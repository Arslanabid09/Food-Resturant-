/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' },  
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' },  
        },
      },
      animation: {
        'slide-right': 'slide-right 0.6s ease-out both',   
        'slide-left': 'slide-left 0.6s ease-out both',   
      },
    },
  },
  plugins: [],
}
