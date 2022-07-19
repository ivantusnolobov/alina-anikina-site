module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 100,
  semi: false,
  singleQuote: false,
  endOfLine: "lf",
  importOrderSeparation: true,
  importOrder: ["^@public/(.*)$", "^@src/(.*)$", "^[./]"],
  plugins: [require("./prettier-plugins.js")],
}
