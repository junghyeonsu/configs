# configs

설정들을 패키지로 만들어놔요.

- eslint
  - [@junghyeonsu/eslint-config-base](https://github.com/junghyeonsu/configs/tree/main/packages/eslint/base)
  - [@junghyeonsu/eslint-config-typescript](https://github.com/junghyeonsu/configs/tree/main/packages/eslint/typescript)
  - [@junghyeonsu/eslint-config-react](https://github.com/junghyeonsu/configs/tree/main/packages/eslint/react)
- etc...

## Quick Start

### (yarn v1, npm) ESLint + Prettier

> React, TypeScript 프로젝트

```console
$ npm install --dev @junghyeonsu/eslint-config-base @junghyeonsu/eslint-config-react @junghyeonsu/eslint-config-typescript eslint prettier

$ yarn add -D @junghyeonsu/eslint-config-base @junghyeonsu/eslint-config-react @junghyeonsu/eslint-config-typescript eslint prettier
```

```js
// .esilntrc.js
module.exports = {
  parserOptions: {
    project: "./tsconfig.json", // tsconfig가 필요해요.
  },
  extends: [
    "@junghyeonsu/react",
    "@junghyeonsu/typescript",
    "@junghyeonsu/base", // base가 제일 마지막에 존재해야 해요.
  ],
};
```

### (yarn berry + pnp) ESLint + Prettier

> 아래 명시된 패키지들을 `devDependencies` 로 설치해주세요.

```console
$ npm install --dev @junghyeonsu/eslint-config-base @junghyeonsu/eslint-config-react @junghyeonsu/eslint-config-typescript eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-json-format eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort

$ yarn add -D @junghyeonsu/eslint-config-base @junghyeonsu/eslint-config-react @junghyeonsu/eslint-config-typescript eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-json-format eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```
