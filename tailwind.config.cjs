/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'split-bg': "linear-gradient(180deg, white 50%, #f0f1f6 50%);",
        'shorten-mobile': "url('./assets/images/bg-shorten-mobile.svg');",
        'shorten-desktop': "url('./assets/images/bg-shorten-desktop.svg');",
        'boost-desktop' : "url('./assets/images/bg-boost-desktop.svg');",
        'boost-mobile' : "url('./assets/images/bg-boost-mobile.svg');",
      },
      backgroundSize:{
        'topRight': '75% 80%;'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cyan': 'hsl(180, 66%, 49%)',
      'darkViolet': 'hsl(257, 27%, 26%)',
      'red': 'hsl(0, 87%, 67%)',
      'gray': 'hsl(230, 25%, 95%)',
      'grayishViolet': 'hsl(257, 7%, 63%)',
      'veryDarkBlue': 'hsl(255, 11%, 22%)',
      'veryDarkViolet': 'hsl(260, 8%, 14%)',
    }
  },
  plugins: [],
}
