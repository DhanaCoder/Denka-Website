/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl":"1700px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "color-change": "colorChange 10s linear infinite alternate-reverse",
        'spin-infinite': 'spinInfinite 10s linear infinite',
      },

      backgroundImage: {
        'hero-bg': "url('/images/hero-shade.png')",
        'circle-bg': "url('/images/circle.png')",
        'sale-bg': "url('/images/sale-bg.png')",
        'footer-bg': "url('/images/footer-bg.png')",
      },

      keyframes: {
        spinInfinite: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        colorChange: {
          "20%": { backgroundColor: "gray" },
          "40%": { backgroundColor: "skyblue" },
          "60%": { backgroundColor: "orange" },
          "80%": { backgroundColor: "red" },
          "100%": { backgroundColor: "brown" },
        },
      },
      screens: {
        navLinkBreak: "1130px",
      },
      colors: {
        blueMain: "#8A73E8",
        gray: '#777777',
        lightGray: '#8A73E80D',

      },
      borderRadius: {
        circle: "50%",
      },
      fontFamily: {
        rational: ['var(--font-rational)'],
        raleway: ['var(--font-raleway)'],
      }
    },
  },
  plugins: [],
};
