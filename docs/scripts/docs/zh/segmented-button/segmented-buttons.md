```html
<ui-segmented-buttons :items="buttonGroupItems"></ui-segmented-buttons>
```

```html
<ui-segmented-buttons>
  <ui-segmented-button></ui-segmented-button>
</ui-segmented-buttons>
```

### Props

| Name                | Type          | Default | Description    |
| ------------------- | ------------- | ------- | -------------- |
| `model` (`v-model`) | array, number | `[]`    | 选中状态       |
| `items`             | array         | `[]`    | 按钮组元素对象 |
| `singleSelect`      | boolean       | `false` | 单选模式       |

- 按钮组元素对象的关键 keys:

  ```js
  {
    text: 'text', // label text
    icon: 'icon', // label icon
  }
  ```

### Slots

| Name      | Props | Description                                        |
| --------- | ----- | -------------------------------------------------- |
| `default` |       | default 插槽包含按钮组组件 `<ui-segmented-button>` |

### Events

| Name       | Type                               | Description          |
| ---------- | ---------------------------------- | -------------------- |
| `change`   | `function(model: array \| number)` | 按钮组状态变化时触发 |
| `selected` | `function(index: number)`          | 点击按钮组时触发     |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听按钮组状态并更新 `model` 属性

- 自动

  ```html
  <ui-segmented-buttons v-model="value"></ui-segmented-buttons>
  ```

- 手动

  ```html
  <ui-segmented-buttons
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-segmented-buttons>
  ```
