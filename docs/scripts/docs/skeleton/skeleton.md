```html
<ui-skeleton><!-- (the loaded data) --></ui-skeleton>
```

#### Props

| Name        | Type            | Default | Description                 |
| ----------- | --------------- | ------- | --------------------------- |
| `loading`   | boolean         | `true`  | Display the skeleton.       |
| `active`    | boolean         | `false` | Show animation effect.      |
| `avatar`    | boolean, object | `false` | Show avatar placeholder.    |
| `title`     | boolean, object | `true`  | Show title placeholder.     |
| `paragraph` | boolean, object | `true`  | Show paragraph placeholder. |

- `avatar` object
  - `avatar.size: string | number`: Set the size of avatar (`'large'` or `'small'`)
  - `avatar.shape: string`: Set the shape of avatar (`'circle'` or `'square'`)
- `title` object
  - `title.width: string`: Set the width of title
- `paragraph` object
  - `paragraph.width: string`: Set the width of paragraph
  - `paragraph.rows: number`: Set the row count of paragraph

#### Slots

| Name      | Slots | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| `default` |       | The default slot holds the any components and can contain HTML. |

```html
<ui-skeleton v-model="loading" active>
  Loaded data content
</ui-skeleton>
```
