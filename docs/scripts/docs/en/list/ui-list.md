```html
<ui-list-group>
  <ui-list-group-subheader>1. Single-line list</ui-list-group-subheader>
  <ui-list>
    <ui-item>
      <ui-item-text-content></ui-item-text-content>
    </ui-item>
  </ui-list>

  <ui-list-divider></ui-list-divider>

  <ui-list-group-subheader>2. Two-line list</ui-list-group-subheader>
  <ui-list type="twoLine">
    <ui-item>
      <ui-item-text-content>
        <ui-item-text1></ui-item-text1>
        <ui-item-text2></ui-item-text2>
      </ui-item-text-content>
    </ui-item>
  </ui-list>

  <ui-list-divider></ui-list-divider>

  <ui-list-group-subheader>3. Rich List</ui-list-group-subheader>
  <ui-list>
    <ui-item>
      <ui-item-first-content></ui-item-first-content>
      <ui-item-text-content></ui-item-text-content>
      <ui-item-last-content></ui-item-last-content>
    </ui-item>
  </ui-list>
</ui-list-group>
```

```html
<ui-nav>
  <ui-nav-item active>Activated item</ui-nav-item>
  <ui-nav-item>Unactivated item</ui-nav-item>
</ui-nav>
```

| Component                   | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `<ui-list>`/`<ui-nav>`      | Mandatory, for the list element.                                                                                               |
| `<ui-item>`/`<ui-nav-item>` | Mandatory, for the list item element.                                                                                          |
| `<ui-item-text-content>`    | Mandatory. Wrapper for list item text content (displayed as middle column of the list item).                                   |
| `<ui-item-text1>`           | Optional, primary text for the list item. Should be the child of `<ui-item-text-content>`.                                     |
| `<ui-item-text2>`           | Optional, secondary text for the list item. Displayed below the primary text. Should be the child of `<ui-item-text-content>`. |
| `<ui-item-first-content>`   | Optional, the first tile in the row (in LTR languages, the first column of the list item). Typically an icon or image.         |
| `<ui-item-last-content>`    | Optional, the last tile in the row (in LTR languages, the last column of the list item). Typically small text, icon. or image. |
| `<ui-list-group>`           | Optional, wrapper around two or more `<ui-list>` elements to be grouped together.                                              |
| `<ui-list-group-subheader>` | Optional, heading text displayed above each list in a group.                                                                   |
| `<ui-list-divider>`         | Optional, for list divider element.                                                                                            |
| `<ui-item-divider>`         | Optional, for list item divider element.                                                                                       |
