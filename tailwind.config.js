/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        enterLeft: {
          from: {
            opacity: 0.2,
            transform: 'translateX(-60px)'
          }
        },
        outRight: {
          to: {
            transform: 'translateX(-100px)'
          }
        },
        desapear: {
          to: {
            display: 'none',
            opacity: 0,
            transform: 'translateY(60px)'
          }
        },
        apear: {
          from: {
            opacity: 0,
            transform: 'translateY(130px)',
            display: 'none'
          },
          to: {
            display: 'block',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
}
