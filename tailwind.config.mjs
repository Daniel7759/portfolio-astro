/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '390px', // Agregar un punto de interrupción personalizado para 400px
      },
      fontFamily:{
        lexend: ['Lexend', 'sans-serif'],
      },
      /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      } */
    },
  },
  plugins: [],
}