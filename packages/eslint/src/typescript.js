module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ['plugin:@typescript-eslint/recommended'],
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
