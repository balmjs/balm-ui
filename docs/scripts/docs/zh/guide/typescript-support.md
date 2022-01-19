# TypeScript 支持

> `balm-ui` >= 9.40.0

## 推荐配置

- alias

  ```js
  {
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
    'balm-ui-next': 'balm-ui/dist/balm-ui-next.js'
  }
  ```

- `tsconfig.json`

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "balm-ui-plus": ["node_modules/balm-ui/dist/balm-ui-plus.d.ts"],
        "balm-ui-next": ["node_modules/balm-ui/dist/balm-ui-next.d.ts"]
      }
    }
  }
  ```
