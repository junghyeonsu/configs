module.exports = {
  plugins: ["@junghyeonsu"],
  extends: ["plugin:@junghyeonsu/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@junghyeonsu/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@junghyeonsu/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["gatsby-node.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      files: ["gatsby-ssr.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: true,
        "shared-node-browser": true,
      },
    },
    {
      files: ["gatsby-browser.{js,jsx,ts,tsx}"],
      env: {
        node: false,
        browser: true,
      },
    },
  ],
};
