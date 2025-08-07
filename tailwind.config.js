/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      xs: '320px', // extra small devices, phones
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        xl: '3rem',
      },
    
    },
    fontSize: {
      titleH1: ['2.2rem', '115%'],
      titleH2: ['1.8rem', '115%'],
      titleH3: ['1.6rem', '115%'],
      titleH4: ['1.4rem', '115%'],
      titleH5: ['1.2rem', '115%'],
      titleH6: ['1rem', '115%'],
      text: ['1rem', '115%'],
    },
    extend: {
      colors: {
        bgHero: '#000000',
      },
      backgroundImage: {
        // bgHero: "url('images/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
