```html
<ui-tabs></ui-tabs>
```

### `<ui-tabs>` Props

| Name    | Type  | Default | Description        |
| ------- | ----- | ------- | ------------------ |
| `items` | array | `[]`    | 设置标签页对象列表 |

- 标签页对象的 keys:

  ```js
  {
    text: 'text', // label text
    icon: 'icon', // label icon
  }
  ```

### `<ui-tabs>` Slots

| Name      | Slots | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含标签页组件及 HTML |

```html
<!-- Full syntax -->
<ui-tab-bar v-model="active">
  <ui-tab
    v-for="(tabItem, tabIndex) in items"
    :key="tabIndex"
    :icon="tabItem.icon"
  >
    {{ tabItem.text }}
  </ui-tab>
</ui-tab-bar>

<!-- Shorthand -->
<ui-tabs v-model="active" :items="items"></ui-tabs>
```
