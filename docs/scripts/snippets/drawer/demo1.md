```html
<ui-top-app-bar fixed contentSelector=".demo-main" menuId="demo-menu">
  Temporary Drawer
</ui-top-app-bar>

<ui-temporary-drawer menuSelector="#demo-menu">
  <ui-drawer-header :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]">
    Header here
  </ui-drawer-header>
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
</ui-temporary-drawer>

<main class="demo-main">
  <h1 :class="$tt('headline4')">Temporary Drawer</h1>
  <p :class="$tt('body1')">Click the menu icon above to open.</p>
</main>
```
