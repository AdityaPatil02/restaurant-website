/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6EA',
          100: '#F5E9CC',
          200: '#EDD9A6',
          300: '#E2C27C',
          400: '#D6AD5A',
          500: '#C9963B',
          600: '#A8772A',
          700: '#855A22',
          800: '#63421B',
          900: '#422C13',
        },
        forest: {
          50: '#EEF5F1',
          100: '#D5E7DD',
          300: '#7FB09A',
          500: '#2F7059',
          700: '#1B4D3B',
          800: '#143A2D',
          900: '#0C2820',
        },
        clay: {
          50: '#FBEFEA',
          100: '#F5D9CD',
          500: '#B5523B',
          600: '#9A4330',
          700: '#7D3526',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FBF7F0',
          200: '#F3EBDD',
        },
        ink: {
          900: '#15110E',
          800: '#221B16',
          700: '#3A302A',
          600: '#5C4F46',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 12s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
