/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        design: "'Libre Baskerville', 'serif'",
      },
      keyframes: {
        bouncy: {
          "0%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        bouncy: "bouncy 2s ease-in infinite alternate",
      },
    },
  },
  plugins: [],
};
