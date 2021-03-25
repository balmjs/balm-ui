```html
<ui-collapse></ui-collapse>
```

### Props

| Name                     | Type            | Default | Description             |
| ------------------------ | --------------- | ------- | ----------------------- |
| `modelValue` (`v-model`) | boolean         | `false` | Default expanded state. |
| `withIcon`               | boolean         | `false` | default icons.          |
| `ripple`                 | boolean, number | `false` | Sets the ripple color.  |

- `ripple` value:
  - `true`: default color
  - `1`: primary color
  - `2`: secondary color

### Slots

| Name               | Props | Description                                                       |
| ------------------ | ----- | ----------------------------------------------------------------- |
| `default`          |       | The default slot holds the collapse content and can contain HTML. |
| `expand-more-icon` |       | Custom expand more icon.                                          |
| `expand-less-icon` |       | Custom expand less icon.                                          |
