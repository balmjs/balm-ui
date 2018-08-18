```html
<ui-menuitem><!-- the menu icon component or label text --></ui-menuitem>
<ui-menuitem-icon><!-- the menu icon --></ui-menuitem-icon>
```

#### Props

| Name     | Type      | Default | Description                                                                    |
| -------- | --------- | ------- | ------------------------------------------------------------------------------ |
| item     | `Object`  | `{}`    | A menu item.                                                                   |
| label    | `String`  | `label` | Item label's name.                                                             |
| nested   | `Boolean` | `false` | Used to wrap a group of `<ui-menuitem>` that will represent a selection group. |
| disabled | `Boolean` | `false` | To disable an item.                                                            |
| selected | `Boolean` | `false` | Used to indicate which element in an item group is selected.                   |

- `item[label]`: The label of a menu item.
- `item.disabled`: Menu item can be disabled.

#### Slots

| Name      | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| (default) | The default slot holds the menu item icon component or label text and can contain HTML. |

```html
<!-- Usage 1 -->
<ui-menuitem>Label</ui-menuitem>

<!-- Usage 2 -->
<ui-menuitem nested>
  <ui-menuitem>
    <ui-menuitem-icon>Icon1</ui-menuitem-icon>
    Label1
  </ui-menuitem>
  <ui-menuitem>Labe2</ui-menuitem>
</ui-menuitem>
```
