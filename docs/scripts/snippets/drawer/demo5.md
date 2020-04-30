```html
<!-- Drawer -->
<ui-drawer type="modal" navId="demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>Nav Content</ui-drawer-content>
</ui-drawer>
<ui-drawer-backdrop></ui-drawer-backdrop>
<!-- Content -->
<div>
  <!-- App bar -->
  <ui-top-app-bar contentSelector=".demo-app-content" navId="demo-menu">
    Title
  </ui-top-app-bar>
  <!-- App content -->
  <div class="demo-app-content">Main Content</div>
</div>
```
