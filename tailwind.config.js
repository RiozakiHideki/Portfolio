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
      letterSpacing: {
        em0075: "0.075em",
      },
      screens: {
        min_screen: "300px",
        sm: "480px",
        home_screen: "516px",
        home_screen_img: "565px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
        fhd: "1920px",
      },
      gridTemplateColumns: {
        main_screen: "288px auto 288px",
      },
    },
  },
  plugins: [],
};
