const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        0: "0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
