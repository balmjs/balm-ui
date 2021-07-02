```html
<ui-snackbar><!-- the message text --></ui-snackbar>
```

### Props

| Name                     | Type    | Default    | Description                                                                                        | Version |
| ------------------------ | ------- | ---------- | -------------------------------------------------------------------------------------------------- | ------- |
| `actionType`             | number  | `0`        | 设置底部消息框的动作类型（`0`: 动作按钮, `1`: 关闭图标）                                           |         |
| `modelValue` (`v-model`) | boolean | `false`    | 底部消息框显示状态                                                                                 |         |
| `timeoutMs`              | number  | `5000`     | 自动关闭的超时时间（以毫秒为单位）。值必须在 `4000` 和 `10000` 之间，否则会引发错误。              |         |
| `message`                | string  | `''`       | 消息文本                                                                                           |         |
| `actionButtonText`       | string  | `''`       | 操作按钮/图标元素（如果存在）                                                                      |         |
| `stacked`                | boolean | `false`    | 将操作按钮/图标放在消息下方而不是旁边                                                              |         |
| `leading`                | boolean | `false`    | 将底部消息框放置在屏幕的前端（在 LTR 中为左，在 RTL 中为右），而不是居中。（仅限平板电脑和台式机） |         |
| `position`               | string  | `'bottom'` | 设置底部消息框的位置                                                                               | 9.21.0  |

```ts
interface Snackbar {
  position: 'bottom' | 'center' | 'top';
}
```

### Slots

| Name      | Props         | Description                     |
| --------- | ------------- | ------------------------------- |
| `default` |               | default 插槽包含消息文本及 HTML |
| `action`  | `actionClass` | 自定义动作按钮                  |

### Events

| Name                | Type                      | Description          |
| ------------------- | ------------------------- | -------------------- |
| `update:modelValue` | `function(open: boolean)` | 底部消息框隐藏时触发 |
| `closed`            | `function()`              | 底部消息框关闭时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听底部消息框显示状态并更新 `modelValue` 属性

- 自动

  ```html
  <ui-snackbar v-model="open"></ui-snackbar>
  ```

- 手动

  ```html
  <ui-snackbar
    :model-value="open"
    @update:modelValue="balmUI.onChange('open', $event)"
  ></ui-snackbar>
  ```
