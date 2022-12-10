module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb-typescript/base"],
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
  },
};
