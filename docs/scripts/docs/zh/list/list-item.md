```html
<ui-item><!-- the item child components --></ui-item>

<ui-nav-item><!-- the link item child components --></ui-nav-item>
```

### `<ui-item>` Props

| Name       | Type    | Default | Description |
| ---------- | ------- | ------- | ----------- |
| `selected` | boolean | `false` | 选中状态    |
| `disabled` | boolean | `false` | 禁用状态    |

### `<ui-nav-item>` Props (New in 8.0.0)

| Name     | Type    | Default    | Description                                     |
| -------- | ------- | ---------- | ----------------------------------------------- |
| `href`   | string  | (required) | 解析的网址。这将是一个 `a` 元素的 `href` 属性。 |
| `active` | boolean | `false`    | 激活状态                                        |

- 与 `<router-link>` 一起使用（需要 `vue-router@3.1.0+`）

  ```html
  <router-link v-slot="{ href, navigate, isActive }">
    <ui-nav-item
      :href="href"
      :active="isActive"
      @click="navigate"
    ></ui-nav-item>
  </router-link>
  ```

### Slots

| Name      | Props       | Description                                                        |
| --------- | ----------- | ------------------------------------------------------------------ |
| `default` |             | default 插槽包含列表项子组件及 HTML                                |
| `before`  | `iconClass` | 自定义 `<ui-item-first-content>` 的内容。通常是图标或图像。        |
| `after`   | `iconClass` | 自定义 `<ui-item-last-content>` 的内容。通常为小文字，图标或图像。 |

**子组件：**

- `<ui-item-text-content>`
  - `<ui-item-text1>`
  - `<ui-item-text2>`
- `<ui-item-first-content>`
- `<ui-item-last-content>`

### Events

| Name    | Type                      | Description      |
| ------- | ------------------------- | ---------------- |
| `click` | `function(event: object)` | 点击列表项时触发 |
