module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-promise"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: [2, "single", "avoid-escape"],
    "no-console": "error",
    "promise/catch-or-return": "error",
    "promise/prefer-await-to-then": "error",
    "promise/prefer-await-to-callbacks": "warn",
    "promise/always-return": "error",
  },
};
