```html
<ui-persistent-drawer menuSelector="#demo-menu">
  <ui-drawer-toolbar-spacer></ui-drawer-toolbar-spacer>
  <ui-drawer-content>
    <ui-list-group>
      <ui-list-nav>
        <ui-item-link v-for="(item, index) in menu1" :key="index">
          <ui-item-first :icon="item.icon"></ui-item-first>
          {{ item.name }}
        </ui-item-link>
      </ui-list-nav>
      <ui-list-divider></ui-list-divider>
      <ui-list-nav>
        <ui-item-link v-for="(item, index) in menu2" :key="index">
          <ui-item-first :icon="item.icon"></ui-item-first>
          {{ item.name }}
        </ui-item-link>
      </ui-list-nav>
    </ui-list-group>
  </ui-drawer-content>
</ui-persistent-drawer>

<div class="demo-content">
  <ui-top-app-bar contentSelector=".demo-main" menuId="demo-menu" :class="$shadow(4)">
    Persistent Drawer
  </ui-top-app-bar>

  <main class="demo-main">
    <h1 :class="$tt('headline4')">Persistent Drawer</h1>
    <p :class="$tt('body1')">Click the menu icon above to open and close the drawer.</p>
  </main>
</div>
```
