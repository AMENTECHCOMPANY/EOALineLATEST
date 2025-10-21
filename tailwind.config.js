/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        beige: {
          50: '#fefdfb',
          100: '#fef9f3',
          200: '#fdf2e9',
          300: '#fae8d4',
          400: '#f6d5a7',
          500: '#f0c078',
          600: '#e8a547',
          700: '#d4841c',
          800: '#b86914',
          900: '#975515',
        }
      },
      letterSpacing: {
        'elegant': '-0.025em',
        'wide-elegant': '0.05em',
      }
    },
  },
  plugins: [],
};
