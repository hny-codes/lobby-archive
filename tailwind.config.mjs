import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        rog: ['Rog', ...defaultTheme.fontFamily.sans],
        'glow-sans': ['Glow-sans', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        lobbyEnter: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        lobby: 'lobbyEnter 300ms ease-in forwards 300ms',
      },
    },
  },
  plugins: [],
};
