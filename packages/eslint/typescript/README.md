# @junghyeonsu/eslint-config-typescript

### info

```json
{
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^5.45.0",
    "@typescript-eslint/parser": "^5.45.0"
  }
}
```

### install

```console
$ yarn add @junghyeonsu/eslint-config-typescript -D
$ npm install --dev @junghyeonsu/eslint-config-typescript
```

### settings

- `.eslintrc.js`

```js
module.exports = {
  // base package랑 같이 써야 돼요.
  extends: ["@junghyeonsu/eslint-config-base", "@junghyeonsu/eslint-config-typescript"],
};

// or

module.exports = {
  extends: ["@junghyeonsu/base, @junghyeonsu/typescript"],
};
```

- `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "json"]
}
```
