/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
       colors: {
        'brand-green': '#27D686', 
        'brand-green-dark': '#34D399',  
          'app-showcase-light': '#EEF9F3', // light green background
        'page-bg': '#FFFFFF', 
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
}
