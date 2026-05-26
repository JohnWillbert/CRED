/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        gold2: '#f0c96b',
        'gold-dark': '#8a6a1f',
        cream: '#f5f0e8',
        dark: '#0a0a0a',
        dark2: '#111111',
        dark3: '#1a1a1a',
        'dark-card': '#111111',
        muted: '#888888',
        border: '#222222',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'scroll-x': 'scrollX 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s infinite',
        'pulse-slow': 'pulse 1s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scrollLine: {
          '0%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scaleY(0.3) translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}
