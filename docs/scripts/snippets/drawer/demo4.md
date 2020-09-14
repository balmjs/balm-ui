```html
<div class="demo-container">
  <!-- App bar -->
  <ui-top-app-bar
    class="demo-app-bar"
    contentSelector=".demo-app-content"
    navId="demo-menu"
  >
    Title
  </ui-top-app-bar>
  <!-- Drawer -->
  <ui-drawer type="dismissible" viewportHeight navId="demo-menu">
    <ui-drawer-header>
      <ui-drawer-title>Title</ui-drawer-title>
      <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-nav>
        <ui-nav-item activated>Item {{ 0 }}</ui-nav-item>
        <ui-nav-item v-for="i in 12" :key="i">Item {{ i }}</ui-nav-item>
      </ui-nav>
    </ui-drawer-content>
  </ui-drawer>
  <!-- Content -->
  <ui-drawer-app-content class="demo-app-content">
    <!-- App content -->
    <p v-for="i in 24" :key="i">Main Content {{ i }}</p>
  </ui-drawer-app-content>
</div>
```

```css
/* Only apply this style if below top app bar */
.demo-app-bar {
  z-index: 7;
}

.demo-app-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
```
