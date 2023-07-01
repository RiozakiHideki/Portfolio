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
      margin: {
        ml_center: "calc((100% - 30%) / 2);",
      },
    },
    keyframes: {
      "gradient-color-animation": {
        "0%": { "background-position": "100% 0%" },
        "100%": { "background-position": "0% 0%" },
      },
    },
    animation: {
      "gradient-color-animation": "gradient-color-animation 5s linear infinite alternate",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        ".gradient-text-animation": {
          background:
            "linear-gradient(to right, #FFFFFF 15%, #FF0000, #FFA500, #FFFF00, #00FF00, #6F00FF, #EE82EE 60%, white 15%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-size": "1000% 100%",
        },
      };

      addUtilities(utilities, ["responsive"]);
    },
  ],
};
