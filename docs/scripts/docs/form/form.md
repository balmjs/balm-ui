```html
<ui-form>
  <ui-form-field></ui-form-field>
</ui-form>
```

### `<ui-form>` Types

- `0`: `'horizontal'`
- `1`: `'vertical'`

#### Props

| Name              | Type           | Default | Description                                           |
| ----------------- | -------------- | ------- | ----------------------------------------------------- |
| `type`            | string, number | `0`     | Mandatory. Text divider types.                        |
| `labelEndAligned` | boolean        | `false` | Styles the form item with a right text-aligned label. |

#### Slots

| Name      | Props | Description                                                 |
| --------- | ----- | ----------------------------------------------------------- |
| `default` |       | The default slot holds the form items and can contain HTML. |

### `<ui-form-field>`

#### Props

| Name           | Type    | Default | Description                                                            |
| -------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `nowrap`       | boolean | `false` | Force the text to stay on a single line and ellipse the overflow text. |
| `alignEnd`     | boolean | `false` | Position the input after the label.                                    |
| `spaceBetween` | boolean | `false` | Align the input and label space between.                               |

#### Slots

| Name      | Props | Description                                                |
| --------- | ----- | ---------------------------------------------------------- |
| `default` |       | The default slot holds the form item and can contain HTML. |
