/** @type {import("prettier").Config} */
const config = {
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "endOfLine": "auto",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
