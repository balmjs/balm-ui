```html
<ui-item><!-- the item child components --></ui-item>

<ui-nav-item><!-- the link item child components --></ui-nav-item>
```

### `<ui-item>` Props

| Name       | Type    | Default | Description                                     |
| ---------- | ------- | ------- | ----------------------------------------------- |
| `selected` | boolean | `false` | Optional, styles the row in an selected state.  |
| `disabled` | boolean | `false` | Optional, styles the row in the disabled state. |

### `<ui-nav-item>` Props (New in 8.0.0)

| Name     | Type    | Default    | Description                                                         |
| -------- | ------- | ---------- | ------------------------------------------------------------------- |
| `href`   | string  | (required) | Resolved url. This would be the `href` attribute of an `a` element. |
| `active` | boolean | `false`    | Optional, styles the row in the activated state.                    |

- Usage with `<router-link>` (requires `vue-router@3.1.0+`)

```html
<router-link v-slot="{ href, isActive }">
  <ui-nav-item :href="href" :active="isActive"></ui-nav-item>
</router-link>
```

### Slots

| Name      | Props       | Description                                                                                                |
| --------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `default` |             | The default slot holds the item child components and can contain HTML.                                     |
| `before`  | `iconClass` | Custom `<ui-item-first-content>`. Optional, the first tile in the row. Typically an icon or image.         |
| `after`   | `iconClass` | Custom `<ui-item-last-content>`. Optional, the last tile in the row. Typically small text, icon. or image. |

**Child components:**

- `<ui-item-text-content>`
  - `<ui-item-text1>`
  - `<ui-item-text2>`
- `<ui-item-first-content>`
- `<ui-item-last-content>`

### Events

| Name    | Type                      | Description                          |
| ------- | ------------------------- | ------------------------------------ |
| `click` | `function(event: object)` | Emits when the list item is clicked. |
