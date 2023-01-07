# @junghyeonsu/eslint-config-base

### info

#### dependencies

```json
{
  "dependencies": {
    "eslint": "^8.29.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-json-format": "^2.0.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-simple-import-sort": "^8.0.0",
    "prettier": "^2.8.0"
  }
}
```

#### prettier config

```json
{
  "singleQuote": false,
  "semi": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all",
  "printWidth": 100,
  "arrowParens": "always"
}
```

### install

```console
$ yarn add @junghyeonsu/eslint-config-base eslint prettier -D
$ npm install --dev @junghyeonsu/eslint-config-base eslint prettier
```

### settings

- `.eslintrc.js`

```js
module.exports = {
  extends: ["@junghyeonsu/eslint-config-base"],
};

// or

module.exports = {
  extends: ["@junghyeonsu/base"],
};
```

- `.vscode/settings.json` (만약 프로젝트에 vscode 설정을 통일시키고 싶다면...)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "json"]
}
```
