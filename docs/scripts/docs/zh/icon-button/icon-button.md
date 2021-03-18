```html
<ui-icon-button></ui-icon-button>
```

### Props

| Name                | Type    | Default | Description                                        |
| ------------------- | ------- | ------- | -------------------------------------------------- |
| `model` (`v-model`) | boolean | `false` | 设置切换状态                                       |
| `icon`              | string  | `''`    | 设置图标。详见 [Material Icons](/#/icons) 图标集。 |
| `toggle`            | object  | `{}`    | 设置切换按钮的两个图标（格式：`{on, off}`）        |

> 通过 `toggle.on` 和 `toggle.off` 属性配置切换按钮图标状态

### Slots

| Name      | Props                 | Description                             |
| --------- | --------------------- | --------------------------------------- |
| `default` | `onClass`, `offClass` | default 插槽包含自定义图标（组）及 HTML |

```html
<template #default="{ onClass, offClass }">
  <i :class="onClass">ON</i>
  <i :class="offClass">OFF</i>
</template>
```

### Events

| Name     | Type                       | Description        |
| -------- | -------------------------- | ------------------ |
| `click`  | `function(event: object)`  | 点击图标按钮时触发 |
| `change` | `function(model: boolean)` | 切换图标状态时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听图标按钮状态并更新 `model` 属性

- 自动

  ```html
  <ui-icon-button v-model="value"></ui-icon-button>
  ```

- 手动

  ```html
  <ui-icon-button
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-icon-button>
  ```
