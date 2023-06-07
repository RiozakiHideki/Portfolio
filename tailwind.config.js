/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        hiColor: "#FF0000",
      },
      fontFamily: {
        big: ["Big Shoulders Display"],
        iceland: ["Iceland"],
      },
      fontSize: {
        extra: "538px",
        font400: "400px",
      },
      screens: {
        sm: "480px",
        home_screen: "516px",
        home_screen_img: "565px",
        md: "768px",
        lg: "1028px,",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
