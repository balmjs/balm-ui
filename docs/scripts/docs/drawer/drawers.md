```html
<!-- Dismissible Drawer -->
<ui-drawer type="dismissible">
  <ui-drawer-header>
    <ui-drawer-title></ui-drawer-title>
    <ui-drawer-subtitle></ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content></ui-drawer-content>
</ui-drawer>
<ui-drawer-app-content></ui-drawer-app-content>

<!-- Modal Drawer -->
<ui-drawer type="modal">
  <ui-drawer-header>
    <ui-drawer-title></ui-drawer-title>
    <ui-drawer-subtitle></ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content></ui-drawer-content>
</ui-drawer>
<ui-drawer-scrim></ui-drawer-scrim>
<div>Main Content</div>
```

| Component                 | Description                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `<ui-drawer>`             | Mandatory.                                                                                                         |
| `<ui-drawer-header>`      | Non-scrollable element that exists at the top of the drawer.                                                       |
| `<ui-drawer-content>`     | Scrollable content area of the drawer.                                                                             |
| `<ui-drawer-title>`       | Title text element of the drawer.                                                                                  |
| `<ui-drawer-subtitle>`    | Subtitle text element of the drawer.                                                                               |
| `<ui-drawer-app-content>` | Mandatory for `<ui-drawer type="dismissible">` only. Sibling element that is resized when the drawer opens/closes. |
| `<ui-drawer-scrim>`       | Mandatory for `<ui-drawer type="modal">` only. Used for the overlay on the app content.                            |
