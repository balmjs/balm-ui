## Tooltip directive

```html
<div v-tooltip="'plain tips'" aria-describedby="tooltip-id"></div>
```

## Tooltip component

**`<ui-tooltip>` Types**

- `0`: `'plain'`

  ```html
  <div aria-describedby="tooltip-id">Text</div>
  <ui-tooltip id="tooltip-id">Tips content</ui-tooltip>
  ```

- `1`: `'rich'` (New in 9.18.0)

  ```html
  <ui-tooltip-anchor>
    <div data-tooltip-id="tooltip-id">Text</div>
    <ui-tooltip id="tooltip-id" rich>Tips content</ui-tooltip>
  </ui-tooltip-anchor>
  ```

### Props

| Name    | Type           | Default | Description                                 | Version |
| ------- | -------------- | ------- | ------------------------------------------- | ------- |
| `type`  | string, number | `0`     | Mandatory. Tooltip types.                   | 9.18.0  |
| `rich`  | boolean        | `false` | Optional. Styles a rich tooltip.            | 9.18.0  |
| `width` | number         | `0`     | Custom max width for the tooltip component. |         |

### Slots

- Plain tooltip

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the tooltip content and can contain HTML. |

- Rich tooltip (New in 9.18.0)

| Name      | Props       | Description                                                      |
| --------- | ----------- | ---------------------------------------------------------------- |
| `title`   |             | The title slot holds the tooltip title and can contain HTML.     |
| `default` | `linkClass` | The default slot holds the tooltip content and can contain HTML. |
