/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#161616',
        'secondary': '#F4F2F4',
        'light-gray': '#E7E7E7',
        'dark-gray': '#9F9C95',
        'maroon': '#9C1F2E'
      },
      fontFamily: {
        'bold': ['HelveticaNeueLTStd-BdEx', 'Helvetica'],
        'thin': ['HelveticaNeueLTStd-ThEx', 'Helvetica'],
        'black': ['HelveticaNeueLTStd-HvEx', 'Helvetica']
      }
    },
  },
  plugins: [],
}

