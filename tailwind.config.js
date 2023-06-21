/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      text1: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1500px",
    },
    backgroundImage: {
      bg1: "url(https://res.cloudinary.com/ddgyd8szc/image/upload/v1687243898/photo-1522968941782-e27ac665baa3_cwps9w.avif)",
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        purple1: "#562349",
        purple2: "#ad6989",
        purple3: "#f5e9ee",
        cream: "#fee2b3",
      },
      transitionProperty: {
        height: "height",
      },
      height: {
        "8rem": "7.5rem",
        "12rem": "12rem",
      },
      width: {
        "10.5rem": "10.5rem",
      },
    },
  },
  plugins: [],
};
