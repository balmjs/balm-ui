### Drawer Below Top App Bar

```html
<!-- App bar -->
<ui-top-app-bar
  contentSelector=".body-container"
  navId="menu-button"
></ui-top-app-bar>
<!-- Content -->
<div class="body-container">
  <!-- Drawer -->
  <ui-drawer type="dismissible" navId="menu-button">
    <ui-drawer-header>
      <ui-drawer-title>Title</ui-drawer-title>
      <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-nav #default="{ itemClass, activeClass }">
        <a :class="[itemClass, activeClass]">Active link</a>
        <a :class="itemClass">Unactive link</a>
      </ui-nav>
    </ui-drawer-content>
  </ui-drawer>
  <!-- App content -->
  <ui-drawer-app-content class="content-container"
    >Main Content</ui-drawer-app-content
  >
</div>
```

### Full Height Drawer

```html
<!-- Drawer -->
<ui-drawer type="modal" navId="menu-button">
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-nav #default="{ itemClass, activeClass }">
      <a :class="[itemClass, activeClass]">Active link</a>
      <a :class="itemClass">Unactive link</a>
    </ui-nav>
  </ui-drawer-content>
</ui-drawer>
<ui-drawer-backdrop></ui-drawer-backdrop>
<!-- Content -->
<div class="body-container">
  <!-- App bar -->
  <ui-top-app-bar
    contentSelector=".content-container"
    navId="menu-button"
  ></ui-top-app-bar>
  <!-- App content -->
  <div class="content-container">Main Content</div>
</div>
```

| Component                 | Description                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `<ui-drawer>`             | Mandatory.                                                                                                         |
| `<ui-drawer-header>`      | Non-scrollable element that exists at the top of the drawer.                                                       |
| `<ui-drawer-content>`     | Scrollable content area of the drawer.                                                                             |
| `<ui-drawer-title>`       | Title text element of the drawer.                                                                                  |
| `<ui-drawer-subtitle>`    | Subtitle text element of the drawer.                                                                               |
| `<ui-drawer-app-content>` | Mandatory for `<ui-drawer type="dismissible">` only. Sibling element that is resized when the drawer opens/closes. |
| `<ui-drawer-backdrop>`    | Mandatory for `<ui-drawer type="modal">` only. Used for the overlay on the app content.                            |
