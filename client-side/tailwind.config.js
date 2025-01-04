/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customFront: '#2f3349',
        customBack: '#25283b',
        clifford: '#da373d',
        primary: '#ff014f',
        body: '#212429',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

