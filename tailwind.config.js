/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        bg: "var(--bg)",
        cardBg: "var(--card-bg)",
        textPrimary: "var(--text)",
        neonMain: "var(--neon-main)",
        neonAccent: "var(--neon-accent)",
        neonLink: "var(--neon-link)",
        appBg: "var(--app-bg)",
        glass: "var(--glass)",
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      },
      animation: {
        'spin-star': 'rotate-star 4s linear infinite',
        'blink-wait': 'blinking-wait 1s infinite',
      },
      keyframes: {
        'rotate-star': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blinking-wait': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        },
        'pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 136, 204, 0)' },
          '0%': { boxShadow: '0 0 0 0 rgba(0, 136, 204, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 136, 204, 0)' },
        }
      }
    },
  },
  plugins: [],
}
