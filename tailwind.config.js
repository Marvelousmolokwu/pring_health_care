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
      bg1: "url(https://res.cloudinary.com/ddgyd8szc/image/upload/v1687375510/therapy_2_st9jvt.png)",
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        purple1: "#562349",
        purple2: "#ad6989",
        purple3: "#f5e9ee",
        purple4: "#421136",
        cream: "#fee2b3",
        cream1: "rgba(173, 105, 137, 0.3)",
        lightPurple: "rgba(86, 35, 73, 0.9)",
        lightPurple3: "rgba(245, 233, 238, 0.4)",
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
      fontSize: {
        sm: "1rem",
      },
    },
  },
  plugins: [],
};
