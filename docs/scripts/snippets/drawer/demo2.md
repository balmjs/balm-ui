```html
<div class="demo-container">
  <!-- App bar -->
  <ui-top-app-bar
    class="demo-app-bar"
    contentSelector=".demo-content"
    :navIcon="false"
  >
    Title
  </ui-top-app-bar>
  <!-- Content -->
  <div class="demo-content">
    <!-- Drawer -->
    <ui-drawer viewportHeight>
      <ui-drawer-header>
        <ui-drawer-title>Title</ui-drawer-title>
        <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="javascript:void(0)" active
            >Item {{ 0 }}</ui-nav-item
          >
          <ui-nav-item v-for="i in 12" :key="i" href="javascript:void(0)"
            >Item {{ i }}</ui-nav-item
          >
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- App content -->
    <div class="demo-app-content">
      <p v-for="i in 24" :key="i">Main Content {{ i }}</p>
    </div>
  </div>
</div>
```

```css
.demo-app-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
```
