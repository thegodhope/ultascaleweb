import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070f',
        surface: '#0b1120',
        accent: '#3b82f6',
        muted: '#94a3b8'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.2), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
