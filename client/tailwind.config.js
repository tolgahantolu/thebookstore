/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'theme-black': '#1c1d1c',
        'theme-white': '#fffffe',
        'theme-orange': '#f25042',
        'theme-background': '#fafaf9',
        'theme-dark-brown': '#716040',
        'theme-light-brown': '#85662e',
      },
      backgroundImage: {
        'header-pattern-1': "url('/library-1.png')",
      },
      screens: {
        xxs: '320px',
        xs: '640px',
        sm: '768px',
        md: '1200px',
        lg: '1380px',
        xl: '1540px',
        xxl: '1940px',
      },
    },
  },
  plugins: [],
};
