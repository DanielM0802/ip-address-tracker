/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      sm: ['13px', '15px'],
      base: ['18px', '21px'],
      lg: ['26px', '31px'],
      xl: ['31px', '37px'],
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'veryDarkGray': 'hsl(0, 0%, 17%)',
        'darkGray': 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
}
