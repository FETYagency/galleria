module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          0: "#000",
          1: "#7D7D7D",
          2: "#E5E5E5",
          3: "#F3F3F3",
          4: "#FFFFFF",
        },
      },
      fontFamily: {
        brand: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
