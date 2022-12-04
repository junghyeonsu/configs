# @junghyeonsu/eslint-config-base

### info

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

- `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "json"]
}
```
