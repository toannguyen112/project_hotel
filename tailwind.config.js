module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screen: {
        sm: "640",
        md: "768",
        lg: "1204",
        xl: "1280"
      },
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        md: "5rem",
        lg: "15rem",
        xl: "25rem"
      },


    },




    extend: {
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
        17: "calc(17/16 * 1rem)",
        18: "calc(18/16 * 1rem)",
        20: "calc(20/16 * 1rem)",
        22: "calc(22/16 * 1rem)",
        24: "calc(24/16 * 1rem)",
        28: "calc(28/16 * 1rem)",
        32: "calc(32/16 * 1rem)",
        36: "calc(36/16 * 1rem)",
        40: "calc(40/16 * 1rem)",
        48: "calc(48/16 * 1rem)",
        54: "calc(54/16 * 1rem)",
        60: "calc(60/16 * 1rem)",
        64: "calc(64/16 * 1rem)",
        70: "calc(70/16 * 1rem)",
        80: "calc(80/16 * 1rem)",
        85: "calc(85/16 * 1rem)",
        90: "calc(90/16 * 1rem)",
        96: "calc(96/16 * 1rem)",
        117: "calc(117/16 * 1rem)",
        128: "calc(128/16 * 1rem)",
        136: "calc(136/16 * 1rem)",
        150: "calc(150/16 * 1rem)",
        160: "calc(160/16 * 1rem)",
        170: "calc(170/16 * 1rem)",
        189: "calc(189/16 * 1rem)",
        200: "calc(200/16 * 1rem)",
        250: "calc(250/16 * 1rem)",
        260: "calc(260/16 * 1rem)",
        400: "calc(400/16 * 1rem)",

        300: "calc(300/16 * 1rem)",
        486: "calc(486/16 * 1rem)",
        max: "max-content"
      },
      borderRadius: {
        none: "0px",
        8: "8px",
        full: "9999px",
        24: "calc(24/16 * 1rem)"
      },
      fontSize: {
        96: "calc(96/16 * 1rem)",
        72: "calc(72/16 * 1rem)",
        64: "calc(64/16 * 1rem)",
        60: "calc(60/16 * 1rem)",
        56: "calc(56/16 * 1rem)",
        48: "calc(48/16 * 1rem)",
        40: "calc(40/16 * 1rem)",
        36: "calc(36/16 * 1rem)",
        30: "calc(30/16 * 1rem)",
        32: "calc(32/16 * 1rem)",
        28: "calc(28/16 * 1rem)",
        24: "calc(24/16 * 1rem)",
        20: "calc(20/16 * 1rem)",
        18: "calc(18/16 * 1rem)",
        16: "calc(16/16 * 1rem)",
        14: "calc(14/16 * 1rem)",
        12: "calc(12/16 * 1rem)"
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        regular: "400",
        normal: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
      },
      lineHeight: {
        none: "1",
        105: "6.6rem"
      },
      aspectRatio: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        9: "9",
        16: "16"
      },
      borderWidth: {
        DEFAULT: "1px",
        "0.1": "0.1px",
        "2": "2px",
        "4": "4px",
        "6": "6px",
        "10": "10px"
      },
    }


  },
  variants: {
    extend: {},
  },
  plugins: [],
};
