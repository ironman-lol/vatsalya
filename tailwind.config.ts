import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9A8A78', // Sophisticated gold
          secondary: '#2C3338', // Rich charcoal
          accent: '#D4B595', // Warm metallic
          cream: '#F5F1E8',
          stone: {
            50: '#FAF9F7',
            100: '#F5F1E8',
            200: '#E8E1D4',
            300: '#D4C5B1',
            400: '#B5A18C',
            500: '#9A8A78',
            600: '#7D6F5D',
            700: '#625748',
            800: '#484237',
            900: '#2C2821',
          }
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} as Config;
