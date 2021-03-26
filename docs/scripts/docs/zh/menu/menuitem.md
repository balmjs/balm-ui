```html
<ui-menuitem><!-- the menu item child components --></ui-menuitem>
```

### Props

| Name       | Type           | Default | Description                                 |
| ---------- | -------------- | ------- | ------------------------------------------- |
| `nested`   | boolean        | `false` | 嵌套菜单项 `<ui-menuitem>` 形成一个菜单项组 |
| `item`     | object         | `{}`    | 设置菜单项对象                              |
| `value`    | string, number | `null`  | 设置菜单项的值                              |
| `disabled` | boolean        | `false` | 禁用状态                                    |
| `selected` | boolean        | `false` | 选中状态                                    |

- 菜单项对象的 keys：

  ```ts
  interface Item {
    value?: string;
    text: string;
    icon?: string;
    disabled?: boolean;
    selected?: boolean;
  }

  interface MenuItem {
    item: Item;
  }
  ```

### Slots

| Name      | Props | Description                         |
| --------- | ----- | ----------------------------------- |
| `default` |       | default 插槽包含菜单项子组件及 HTML |

**子组件：**

- `<ui-menuitem-text>`
- `<ui-menuitem-icon>`
