```html
<div v-shadow="4"></div>
```

### 默认阴影

- `v-shadow="z"`

| Value | Type   | Default | Description                     |
| ----- | ------ | ------- | ------------------------------- |
| `z`   | number | `0`     | 设置阴影层级，范围值：`[0, 24]` |

### 动画阴影

- `v-shadow.transition="[z1, z2]"`

应用正确的 CSS 规则在阴影层级之间转换：

- `z1`: 默认的层级
- `z2`: 鼠标经过时的层级
