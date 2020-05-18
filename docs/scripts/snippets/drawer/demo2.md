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
          <template #default="{ itemClass, activeClass }">
            <a :class="[itemClass, activeClass]">Item {{ 0 }}</a>
            <a v-for="i in 12" :key="i" :class="itemClass">Item {{ i }}</a>
          </template>
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
