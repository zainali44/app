const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
    content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "Poppins"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
});