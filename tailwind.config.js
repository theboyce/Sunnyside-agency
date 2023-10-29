/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/desktop/image-header.jpg')",
        'first-service': "url('/src/assets/desktop/image-graphic-design.jpg')",
        'second-service': "url('/src/assets/desktop/image-photography.jpg')",
      },
    },
    fontFamily: {
      body: ['Barlow'],
      heading: ['Fraunces'],
    },

    screens: {
      sm: '375px',
      lg: '1440px',
    },

    colors: {
      'soft-red': 'hsl(7, 99%, 70%)',
      'yellow-only': 'hsl(51, 100%, 49%)',
      'dark-saturated-cyan': ' hsl(167, 40%, 24%)',
      'dark-blue': 'hsl(198, 62%, 26%)',
      'dark-moderate-cyan': 'hsl(168, 34%, 41%)',

      'very-dark-desatured-blue': 'hsl(212, 27%, 19%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'white-only': 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
};
