/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCactus: {
          100: '#E0ECDE',
          200: '#CDE0C9',
          300: '#68B2A0',
          400: '#2C6975'
        },
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite'

      },
    },
  },
  plugins: [],
}
