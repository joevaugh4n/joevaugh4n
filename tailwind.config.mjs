/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(/src/assets/pizza.cur), default',
      },
      fontFamily: {
        serif: 'Times New Roman'
      }
    }
  },
  plugins: []
}
