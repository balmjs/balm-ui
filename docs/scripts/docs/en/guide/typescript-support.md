# TypeScript Support

> `balm-ui` >= 9.40.0

## Recommended Configuration

- alias

  ```js
  {
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
  }
  ```

- `tsconfig.json`

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "balm-ui-plus": ["node_modules/balm-ui/dist/balm-ui-plus.d.ts"]
      }
    }
  }
  ```
