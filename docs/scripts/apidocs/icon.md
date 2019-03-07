```html
<ui-icon><!-- the material design icon name --></ui-icon>
```

#### Props

| Name       | Type           | Default | Description                                                 |
| ---------- | -------------- | ------- | ----------------------------------------------------------- |
| `size`     | number, string | `24`    | Material design sizing.                                     |
| `dark`     | boolean        | `false` | An icon on a light background with a dark foreground color. |
| `light`    | boolean        | `false` | An icon on a dark background with a light foreground color. |
| `inactive` | boolean        | `false` | An icon is disabled or inactive.                            |

> Although the icons in the font can be scaled to any size, in accordance with material design icons guidelines, we recommend them to be shown in either `18`, `24`, `36` or `48`px.

#### Slots

| Name      | Slots | Description                                                                |
| --------- | ----- | -------------------------------------------------------------------------- |
| `default` |       | The default slot holds the material design icon name and can contain HTML. |

#### Events

| Name    | Type                      | Description                     |
| ------- | ------------------------- | ------------------------------- |
| `click` | `function(event: object)` | Emits when the icon is clicked. |

#### Sass Variables

- `$mdc-icon-sizes` (default: `18 24 36 48`)
- `$mdc-icon-color-dark`
- `$mdc-icon-color-dark-inactive`
- `$mdc-icon-color-light`
- `$mdc-icon-color-light-inactive`
