/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        pastel: {
          beige: '#FDFBF7',
          lavender: '#F4F0F8', // Very light lavender for backgrounds
          blue: '#F0F4F8',
          text: '#4A4053',     // Soft muted dark purple-grey
        },
        dark: {
          bg: '#16131C',      // Deep dark lavender/gray
          card: '#221D2C',    // Slightly lighter for cards
          text: '#E9E5F0',    // Soft light lavender-tinted text
          accent: '#A69BB4',  // Lavender accent in dark mode
        },
        primary: {
          light: '#BCA8D3',   // Soft prominent lavender
          DEFAULT: '#9A82B9', // Main lavender CTA
          dark: '#765C97',    // Hover state
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
