# @junghyeonsu/eslint-config-typescript

### info

```json
{
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^5.45.0",
    "@typescript-eslint/parser": "^5.45.0",
    "eslint-config-airbnb-typescript": "^17.0.0"
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
  parserOptions: {
    project: "./tsconfig.json", // tsconfig가 필요해요.
  },
};

// or

module.exports = {
  extends: ["@junghyeonsu/base, @junghyeonsu/typescript"],
  parserOptions: {
    project: "./tsconfig.json", // tsconfig가 필요해요.
  },
};
```

- `.vscode/settings.json` (만약 프로젝트에 vscode 설정을 통일시키고 싶다면...)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "json"]
}
```
