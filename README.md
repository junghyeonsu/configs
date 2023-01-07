# configs

설정들을 패키지로 만들어놔요.

- eslint
  - [@junghyeonsu/eslint-plugin](https://github.com/junghyeonsu/configs/tree/main/packages/eslint)
- etc...

## Quick Start

### ESLint + Prettier

> React, TypeScript 프로젝트

- npm

```console
npm install --dev @junghyeonsu/eslint-plugin eslint prettier
```

- yarn v1

```console
yarn add -D @junghyeonsu/eslint-plugin eslint prettier
```

- yarn berry + pnp

```console
yarn add -D @junghyeonsu/eslint-plugin eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-json-format eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```

```js
// .esilntrc.js
module.exports = {
  plugins: ["@junghyeonsu"],
  extends: ["plugin:@junghyeonsu/auto"],
};
```
