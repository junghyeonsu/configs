# @junghyeonsu/eslint-config-react

> 리액트에 대한 eslint plugin 모음 패키지예요.

### info

```json
{
  "dependencies": {
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-react": "^7.31.11",
    "eslint-plugin-react-hooks": "^4.6.0"
  }
}
```

### install

```console
$ yarn add @junghyeonsu/eslint-config-react -D
$ npm install --dev @junghyeonsu/eslint-config-react
```

### settings

- `.eslintrc.js`

```js
module.exports = {
  // base package랑 같이 써야 돼요.
  extends: ["@junghyeonsu/eslint-config-base", "@junghyeonsu/eslint-config-react"],
};

// or

module.exports = {
  extends: ["@junghyeonsu/base, @junghyeonsu/react"],
};
```

- `.vscode/settings.json` (만약 프로젝트에 vscode 설정을 통일시키고 싶다면...)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "json"]
}
```
