```html
<!-- App bar -->
<ui-top-app-bar
  contentSelector=".demo-content"
  navId="demo-menu"
  class="demo-app-bar"
>
  Title
</ui-top-app-bar>
<!-- Drawer -->
<ui-drawer type="dismissible" viewportHeight navId="demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>Nav Content</ui-drawer-content>
</ui-drawer>
<!-- Content -->
<ui-drawer-app-content class="demo-content">
  <!-- App content -->
  <div>Main Content</div>
</ui-drawer-app-content>
```
