```html
<div v-ripple></div>
```

> 注意：不支持动态 class

### 波纹效果

- `v-ripple="color"`
- `v-ripple:cssOnly="color"`

| Value   | Type           | Default     | Description  |
| ------- | -------------- | ----------- | ------------ |
| `color` | number, string | `undefined` | 设置波纹颜色 |

1. 设置波纹颜色为主色：`1` 或 `'primary'`
2. 设置波纹颜色为辅色：`2` 或 `'secondary'`

### 去波纹效果

- `v-ripple.unbounded="color"`
- `v-ripple:cssOnly.unbounded="color"`
