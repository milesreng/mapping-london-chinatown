/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Playfair Display', 'serif'],
        'content': ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

