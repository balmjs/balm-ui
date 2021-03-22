```html
<ui-menu-anchor>
  <ui-menu :items="menuItems"></ui-menu>
</ui-menu-anchor>
```

```html
<ui-menu-anchor>
  <ui-menu>
    <ui-menuitem>
      <ui-menuitem-text>Label</ui-menuitem-text>
    </ui-menuitem>

    <ui-item-divider></ui-item-divider>

    <ui-menuitem nested>
      <ui-menuitem>
        <ui-menuitem-icon>Icon</ui-menuitem-icon>
        <ui-menuitem-text>Label</ui-menuitem-text>
      </ui-menuitem>
    </ui-menuitem>
  </ui-menu>
</ui-menu-anchor>
```

| Component            | Description                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<ui-menu-anchor>`   | Used to indicate which element the menu should be anchored to.                                                                                                                           |
| `<ui-menu>`          | (Parent element) Required on the root element.                                                                                                                                           |
| `<ui-menuitem>`      | (Child element) A menu item.                                                                                                                                                             |
| `<ui-menuitem-text>` | (Child element) A menu item text.                                                                                                                                                        |
| `<ui-menuitem-icon>` | (Child element) Required when using a `<ui-menuitem nested>` to indicate which item is selected. Should contain an icon or svg that indicates the selected state of the `<ui-menuitem>`. |
