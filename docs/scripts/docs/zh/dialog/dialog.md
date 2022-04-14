```html
<ui-dialog><!-- the dialog child components --></ui-dialog>
```

> 提示：`<ui-dialog>` 的动作必须包含至少一个 `<ui-button>` 或 `<ui-icon-button>`

### Props

| Name                     | Type    | Default | Description                                                                     | Version |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------- | ------- |
| `modelValue` (`v-model`) | boolean | `false` | 对话框开启状态                                                                  |         |
| `escapeKey`              | boolean | `true`  | 设置按下 Escape 键时反映的操作。设置为 `false` 将禁用通过 Escape 键关闭对话框。 | 9.13.0  |
| `closable`               | boolean | `true`  | 当用户对“接受”或“取消”按钮进行操作时，关闭对话框。                              |         |
| `maskClosable`           | boolean | `false` | 当点击对话框遮罩层时，关闭对话框。                                              |         |
| `noScrim`                | boolean | `false` | 隐藏对话框遮罩层                                                                |         |
| `resetScroll`            | boolean | `false` | 对话框关闭时，重置滚动条。                                                      |         |
| `fullscreen`             | boolean | `false` | 全屏效果                                                                        | 9.14.0  |

> 提示：全屏对话框适用于移动/小屏幕设备。

> 提示：`noBackdrop` 属性从 9.25.0 起重命名为 `noScrim`

### Slots

| Name      | Props | Description                  |
| --------- | ----- | ---------------------------- |
| `default` |       | default 插槽包含对话框子组件 |

**子组件：**

- `<ui-dialog-title>`
- `<ui-dialog-content>`
- `<ui-dialog-actions>`

### Events

| Name                | Type                        | Description              |
| ------------------- | --------------------------- | ------------------------ |
| `update:modelValue` | `function(open: boolean)`   | 对话框开启状态变化时触发 |
| `close`             | `function()`                | 对话框关闭时触发         |
| `confirm`           | `function(result: boolean)` | 点击对话框动作按钮时触发 |
| `accept`            | `function()`                | 点击对话框确定按钮时触发 |
| `cancel`            | `function()`                | 点击对话框取消按钮时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听对话框开启状态并更新 `modelValue` 属性

- 自动

  ```html
  <ui-dialog v-model="open"></ui-dialog>
  ```

- 手动

  ```html
  <ui-dialog
    :model-value="open"
    @update:model-value="balmUI.onChange('open', $event)"
  ></ui-dialog>
  ```
