import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        diva: {
          dark: '#2d1b2e',
          plum: '#4a2c4a',
          magenta: '#6b3a6b',
          neon: '#ff6ec7',
          'neon-dim': '#e84da8',
          cream: '#f5f0eb',
          sand: '#e8e0d5',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(255,110,199,0.6))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 16px rgba(255,110,199,0.8))' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 110, 199, 0.4)',
        'neon-lg': '0 0 40px rgba(255, 110, 199, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
