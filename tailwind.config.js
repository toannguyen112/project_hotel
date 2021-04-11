module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "5rem",
        lg: "25rem",
      },
    },
 
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
