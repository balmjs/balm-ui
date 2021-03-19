```html
<ui-drawer>
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-nav>
      <ui-nav-item active>Activated link</ui-nav-item>
      <ui-nav-item>Unactivated link</ui-nav-item>
    </ui-nav>
  </ui-drawer-content>
</ui-drawer>
```

| Component                 | Description                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `<ui-drawer>`             | (Parent element) Mandatory.                                                                                        |
| `<ui-drawer-header>`      | (Child element) Non-scrollable element that exists at the top of the drawer.                                       |
| `<ui-drawer-content>`     | (Child element) Scrollable content area of the drawer.                                                             |
| `<ui-drawer-title>`       | (Child element) Title text element of the drawer.                                                                  |
| `<ui-drawer-subtitle>`    | (Child element) Subtitle text element of the drawer.                                                               |
| `<ui-drawer-app-content>` | Mandatory for `<ui-drawer type="dismissible">` only. Sibling element that is resized when the drawer opens/closes. |
| `<ui-drawer-backdrop>`    | Mandatory for `<ui-drawer type="modal">` only. Used for the overlay on the app content.                            |
