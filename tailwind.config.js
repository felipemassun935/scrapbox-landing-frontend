/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2A3582',
          orange: '#EB6700',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.21, 0.47, 0.32, 0.98)',
      },
    },
  },
  plugins: [],
}
