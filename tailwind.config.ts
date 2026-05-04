import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070f',
        surface: '#0b1120',
        accent: '#e63946',
        muted: '#b8bdc7'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(230,57,70,0.24), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,90,95,0.2), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
