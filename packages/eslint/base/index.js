module.exports = {
  extends: ["airbnb-base", "plugin:import/errors", "eslint:recommended", "prettier"],
  plugins: ["json-format", "prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 100,
        arrowParens: "always",
      },
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
