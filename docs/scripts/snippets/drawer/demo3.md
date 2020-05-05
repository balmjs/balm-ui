```html
<!-- Drawer -->
<ui-drawer type="dismissible" viewportHeight navId="demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>Nav Content</ui-drawer-content>
</ui-drawer>
<!-- Content -->
<ui-drawer-app-content>
  <!-- App bar -->
  <ui-top-app-bar contentSelector=".demo-app-content" navId="demo-menu">
    Title
  </ui-top-app-bar>
  <!-- App content -->
  <div class="demo-app-content">Main Content</div>
</ui-drawer-app-content>
```
