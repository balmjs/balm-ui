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

| Component            | Description                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<ui-menu-anchor>`   | Used to indicate which element the menu should be anchored to.                                                                                                           |
| `<ui-menu>`          | Required on the root element.                                                                                                                                            |
| `<ui-menuitem>`      | A menu item.                                                                                                                                                             |
| `<ui-menuitem-text>` | A menu item text.                                                                                                                                                        |
| `<ui-menuitem-icon>` | Required when using a `<ui-menuitem nested>` to indicate which item is selected. Should contain an icon or svg that indicates the selected state of the `<ui-menuitem>`. |
