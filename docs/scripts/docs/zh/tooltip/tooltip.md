## 文字提示组件

**`<ui-tooltip>` 类型**

- `0`: `'plain'`

  ```html
  <div aria-describedby="tooltip-id">Text</div>
  <ui-tooltip id="tooltip-id">Tips content</ui-tooltip>
  ```

- `1`: `'rich'` (New in 8.33.0)

  ```html
  <ui-tooltip-anchor>
    <div data-tooltip-id="tooltip-id">Text</div>
    <ui-tooltip id="tooltip-id" rich>Tips content</ui-tooltip>
  </ui-tooltip-anchor>
  ```

### Props

| Name    | Type           | Default | Description              | Version |
| ------- | -------------- | ------- | ------------------------ | ------- |
| `type`  | string, number | `0`     | 文字提示的类型           | 8.33.0  |
| `rich`  | boolean        | `false` | 可选。启用富文字提示     | 8.33.0  |
| `width` | number         | `0`     | 自定义文字提示的最大宽度 |         |

### Slots

- Plain tooltip

| Name      | Props | Description                                   |
| --------- | ----- | --------------------------------------------- |
| `default` |       | default 插槽包含文字提示的内容（可包含 HTML） |

- Rich tooltip (New in 8.33.0)

| Name      | Props       | Description                                   |
| --------- | ----------- | --------------------------------------------- |
| `title`   |             | title 插槽包含文字提示的标题（可包含 HTML）   |
| `default` | `linkClass` | default 插槽包含文字提示的内容（可包含 HTML） |
