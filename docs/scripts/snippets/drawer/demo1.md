```html
<div class="demo-container">
  <!-- Drawer -->
  <ui-drawer viewportHeight>
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
  <div class="demo-content">
    <!-- App bar -->
    <ui-top-app-bar
      class="demo-app-bar"
      contentSelector=".demo-app-content"
      :navIcon="false"
    >
      Title
    </ui-top-app-bar>
    <!-- App content -->
    <div class="demo-app-content">
      <p v-for="i in 24" :key="i">Main Content {{ i }}</p>
    </div>
  </div>
</div>
```

```css
.demo-content {
  width: 100%;
}

.demo-app-content {
  height: 100%;
  overflow: auto;
}
```
