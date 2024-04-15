/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        "blue":"#3575E2"
      }
    },
  },
  plugins: [],
}

