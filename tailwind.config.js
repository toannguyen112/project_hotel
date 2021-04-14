module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screen : {
        sm:"640",
        md:"768",
        lg:"1204",
        xl:"1280"
      },
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        md: "5rem",
        lg: "15rem",
        xl:"25rem"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
  
        black: "#333333",
        white: "#fff",
        gray: "#F4F4F4",
  
        primary: "#06569E",
        secondary: "#678096",
        "primary-dark": "#0F203C",
        "secondary-lighter": "#4EA1EB",
        "secondary-light": "#283FAF",
        "secondary-dark": "#182463",
        "accent-blue": "#05457C",
        "accent-main-darker": "#0F203C",
        "accent-blue-dark": "#032C50",
        "accent-red": "#ED0000",
        "neutral-light": "#FEFEFE",
        "neutral-gray": "#C3C3C3",
        "neutral-dark": "#878787",
        "neutral-black-shy" :"#F4F4F4",
        "neutral-dark-shy": "#0F203C",
        "accent-gray" :" #DAD7D7"
  
      },
      spacing: {
        px: "1px",
        0: "0",
        4: "calc(4/16 * 1rem)",
        6: "calc(6/16 * 1rem)",
        8: "calc(8/16 * 1rem)",
        10: "calc(10/16 * 1rem)",
        12: "calc(12/16 * 1rem)",
        14: "calc(14/16 * 1rem)",
        16: "1rem",
        20: "calc(20/16 * 1rem)",
        24: "calc(24/16 * 1rem)",
        28: "calc(28/16 * 1rem)",
        30: "calc(30/16 * 1rem)",
        32: "calc(32/16 * 1rem)",
        36: "calc(36/16 * 1rem)",
        40: "calc(40/16 * 1rem)",
        48: "calc(48/16 * 1rem)",
        54: "calc(54/16 * 1rem)",
        56: "calc(56/16 * 1rem)",
        60: "calc(60/16 * 1rem)",
        64: "calc(64/16 * 1rem)",
        72: "calc(72/16 * 1rem)",
        76: "calc(76/16 * 1rem)",
        80: "calc(80/16 * 1rem)",
        85: "calc(85/16 * 1rem)",
        90: "calc(90/16 * 1rem)",
        96: "calc(96/16 * 1rem)",
        128: "calc(128/16 * 1rem)",
        136: "calc(136/16 * 1rem)",
        141: "calc(141/16 * 1rem)",
        150: "calc(150/16 * 1rem)",
        160: "calc(160/16 * 1rem)",
        170: "calc(170/16 * 1rem)",
        200: "calc(200/16 * 1rem)",
        240: "calc(240/16 * 1rem)",
        260: "calc(260/16 * 1rem)",
        300: "calc(300/16 * 1rem)",
        600: "calc(600/16 * 1rem)",
        700: "calc(700/16 * 1rem)",
        max: "max-content"
      },
      borderRadius: {
        none: "0px",
        full: "9999px",
        3: "calc(3/16 * 1rem)",
        5: "calc(5/16 * 1rem)",
        10: "calc(10/16 * 1rem)",
  
        24: "calc(24/16 * 1rem)",
      },
      fontSize: {
        96: "calc(96/16 * 1rem)",
        72: "calc(72/16 * 1rem)",
        64: "calc(64/16 * 1rem)", 
        60: "calc(60/16 * 1rem)",
        56: "calc(56/16 * 1rem)",
        48: "calc(48/16 * 1rem)",
        40: "calc(40/16 * 1rem)",
        38: "calc(38/16 * 1rem)",
        36: "calc(36/16 * 1rem)",
        30: "calc(30/16 * 1rem)",
        32: "calc(32/16 * 1rem)",
        28: "calc(28/16 * 1rem)",
        24: "calc(24/16 * 1rem)",
        20: "calc(20/16 * 1rem)",
        18: "calc(18/16 * 1rem)",
        16: "calc(16/16 * 1rem)",
        14: "calc(14/16 * 1rem)",
        13: "calc(13/16 * 1rem)",
        12: "calc(12/16 * 1rem)"
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        then: "400",
        normal: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
      },
      
    },
    
 
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
