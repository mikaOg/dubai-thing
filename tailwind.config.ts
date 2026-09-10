import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf8f1',
          100: '#f9ecd8',
          200: '#f1d5ab',
          300: '#e6b877',
          400: '#db9c4d',
          500: '#c98232',
          600: '#a86527',
          700: '#854d22',
          800: '#6b3f21',
          900: '#59361e',
        },
        desert: {
          900: '#1a1512',
          800: '#2a221c',
          700: '#3d3229',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
