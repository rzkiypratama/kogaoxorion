/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'overview-img': "url('/overview-img.jpg')",
          'overview-img-2': "url('/overview-3.svg')",

      },
    },
    fontFamily: {
      'jap': ['Sawarabi Mincho'],
    },
    colors: {
      'main-color': '#5A5E61',
      'secondary-color': '#C6AD99',
      'transparent': '#000'
    }
  },
  plugins: [],
}
