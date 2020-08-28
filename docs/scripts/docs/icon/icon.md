```html
<ui-icon><!-- the material design icon name --></ui-icon>
```

### Props

| Name       | Type           | Default | Description                                                                                                                                                                                                             |
| ---------- | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | string, number | `0`     | Material icon theme.                                                                                                                                                                                                    |
| `outlined` | boolean        | `false` | Outlined icons customize stroke and fill attributes for a light, clean style that works well in dense UIs. The stroke weight of outlined icons can be adjusted to complement or contrast the weight of your typography. |
| `round`    | boolean        | `false` | Rounded icons use a corner radius that pairs well with brands that use heavier typography, curved logos, or circular elements to express their style.                                                                   |
| `twoTone`  | boolean        | `false` | Two-tone icons have added dimension, using the attributes of stroke, fill, and color. Contrasting stroke and fill colors enables the use of multiple brand colors and can improve legibility.                           |
| `sharp`    | boolean        | `false` | Sharp icons display corners with straight edges, for a crisp style that remains legible even at smaller scales. These rectangular shapes can support brand styles that aren’t well-reflected by rounded shapes.         |
| `size`     | number         | `24`    | Material icon sizing.                                                                                                                                                                                                   |
| `dark`     | boolean        | `false` | An icon on a light background with a dark foreground color.                                                                                                                                                             |
| `light`    | boolean        | `false` | An icon on a dark background with a light foreground color.                                                                                                                                                             |
| `inactive` | boolean        | `false` | An icon is disabled or inactive.                                                                                                                                                                                        |

- **Types:** `0: 'filled'`, `1: 'outlined'`, `2: 'round'`, `3: 'twoTone'`, `4: 'sharp'`

> Although the icons in the font can be scaled to any size, in accordance with material design icons guidelines, we recommend them to be shown in either `18`, `24`, `36` or `48`px.

### Slots

| Name      | Props | Description                                                                |
| --------- | ----- | -------------------------------------------------------------------------- |
| `default` |       | The default slot holds the material design icon name and can contain HTML. |

### Events

| Name    | Type                      | Description                     |
| ------- | ------------------------- | ------------------------------- |
| `click` | `function(event: object)` | Emits when the icon is clicked. |
