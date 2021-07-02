```html
<ui-skeleton><!-- (the loaded data) --></ui-skeleton>
```

### Props

| Name        | Type            | Default | Description    |
| ----------- | --------------- | ------- | -------------- |
| `loading`   | boolean         | `true`  | 显示骨架屏     |
| `active`    | boolean         | `false` | 显示动画效果   |
| `avatar`    | boolean, object | `false` | 显示头像占位符 |
| `title`     | boolean, object | `true`  | 显示标题占位符 |
| `paragraph` | boolean, object | `true`  | 显示内容占位符 |

```ts
interface Skeleton {
  avatar: {
    size: 'large' | 'small' | number; // 设置头像尺寸
    shape: 'circle' | 'square'; // 设置头像形状
  };
  title: {
    width: string; // 设置标题宽度
  };
  paragraph: {
    width: string; // 设置内容宽度
    rows: number; // 设置内容行数
  };
}
```

### Slots

| Name      | Props | Description                     |
| --------- | ----- | ------------------------------- |
| `default` |       | default 插槽包含任意组件及 HTML |
