```html
<ui-menuitem><!-- the menu item child components --></ui-menuitem>
```

#### Props

| Name       | Type    | Default | Description                                                                    |
| ---------- | ------- | ------- | ------------------------------------------------------------------------------ |
| `nested`   | boolean | `false` | Used to wrap a group of `<ui-menuitem>` that will represent a selection group. |
| `item`     | object  | `{}`    | A menu item.                                                                   |
| `disabled` | boolean | `false` | To disable an item.                                                            |
| `selected` | boolean | `false` | Used to indicate which element in an item group is selected.                   |

- The keys of a menu item object:

```js
{
  text: string,
  icon: string,
  disabled: boolean,
  selected: boolean
}
```

#### Slots

| Name      | Props | Description                                                                             |
| --------- | ----- | --------------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the menu item icon component or label text and can contain HTML. |

**Menu item child components:**

- `<ui-menuitem-text>`
- `<ui-menuitem-icon>`

```html
<!-- Usage 1 -->
<ui-menuitem>
  <ui-menuitem-text>Label</ui-menuitem-text>
</ui-menuitem>

<!-- Usage 2 -->
<ui-menuitem nested>
  <ui-menuitem>
    <ui-menuitem-icon>Icon1</ui-menuitem-icon>
    <ui-menuitem-text>Label1</ui-menuitem-text>
  </ui-menuitem>
  <ui-menuitem>
    <ui-menuitem-text>Labe2</ui-menuitem-text>
  </ui-menuitem>
</ui-menuitem>
```
