/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    deviceSizes: [360, 414, 480, 576, 640, 768],
    imageSizes: [256, 276, 320, 350, 420, 508],
  },
  theme: {
    screens: {
      "3xs": "360px",
      "2xs": "414px",
      xs: "480px",
      sm: "576px",
      md: "640px",
      lg: "768px",
      xl: "906px",
      "2xl": "1024px",
      "max-2xs": { max: "414px" },
      "max-lg": { max: "768px" },
      "max-xl": { max: "906px" },
      "max-2xl": { max: "1024px" },
      "max-3xl": { max: "1185px" },
    },
    extend: {
      colors: {
        primary: {
          "dark-blue": "hsl(233, 26%, 24%)",
          "lime-green": "hsl(136, 65%, 51%)",
          "bright-cyan": "hsl(192, 70%, 51%)",
        },
        neutral: {
          "grayish-blue": "hsl(233, 8%, 62%)",
          "light-grayish-blue": "hsl(220, 16%, 96%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      backgroundImage: (theme) => ({
        hero_img: "url('/images/hero_img.jpg')",
        cleaning: "url('/images/cleaning.jpg')",
        painting: "url('/images/painting.jpg')",
        renovations: "url('/images/renovations.jpg')",
        calltoaction: "url('/images/calltoaction8.jpg')",
      }),
      backgroundSize: {
        "custom-mobile-header-size": "100% 50%",
        "custom-mobile-mockup-size": "auto 60%",
      },
      screens: {
        "3xl": "1280px",
        "4xl": "1420px",
      },
      boxShadow: {
        "3xl": "0 30px 30px -13px rgba(0, 0, 0, 0.3)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    inset: {
      "-42.6%": "-42.6%",
    },
  },
  plugins: [],
};
