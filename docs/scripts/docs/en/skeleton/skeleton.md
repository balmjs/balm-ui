```html
<ui-skeleton><!-- (the loaded data) --></ui-skeleton>
```

### Props

| Name        | Type            | Default | Description                 |
| ----------- | --------------- | ------- | --------------------------- |
| `loading`   | boolean         | `true`  | Display the skeleton.       |
| `active`    | boolean         | `false` | Show animation effect.      |
| `avatar`    | boolean, object | `false` | Show avatar placeholder.    |
| `title`     | boolean, object | `true`  | Show title placeholder.     |
| `paragraph` | boolean, object | `true`  | Show paragraph placeholder. |

```ts
interface Skeleton {
  avatar: {
    size: 'large' | 'small' | number; // Set the size of avatar
    shape: 'circle' | 'square'; // Set the shape of avatar
  };
  title: {
    width: string; // Set the width of title
  };
  paragraph: {
    width: string; // Set the width of paragraph
    rows: number; // Set the row count of paragraph
  };
}
```

### Slots

| Name      | Props | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| `default` |       | The default slot holds the any components and can contain HTML. |
