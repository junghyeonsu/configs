# @junghyeonsu/eslint-plugin

## prettier config

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

- `.vscode/settings.json` (만약 프로젝트에 vscode 설정을 통일시키고 싶다면...)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "json"]
}
```
