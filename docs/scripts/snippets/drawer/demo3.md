```html
<ui-drawer type="dismissible" menuSelector="#demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>{{ title }}</ui-drawer-title>
    <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-list>
      <ui-item activated @click.native="() => { $router.back(); }">
        <ui-item-first-content icon="arrow_back"></ui-item-first-content>
        <ui-item-text-content>Back</ui-item-text-content>
      </ui-item>
      <ui-list-divider></ui-list-divider>
      <template v-for="(item, index) in menu">
        <ui-list-divider
          v-if="item === '-'"
          :key="`divider-${index}`"
        ></ui-list-divider>
        <template v-else>
          <ui-list-group-subheader
            v-if="item.subheader"
            :key="`subheader-${index}`"
          >
            {{ item.subheader }}
          </ui-list-group-subheader>
          <ui-item
            v-for="(subItem, subIndex) in item.items"
            :key="`item-${index}-${subIndex}`"
          >
            <ui-item-first-content :icon="subItem.icon"></ui-item-first-content>
            <ui-item-text-content>{{ subItem.name }}</ui-item-text-content>
          </ui-item>
        </template>
      </template>
    </ui-list>
  </ui-drawer-content>
</ui-drawer>

<ui-drawer-app-content class="demo-main">
  <ui-top-app-bar
    contentSelector=".demo-content"
    navId="demo-menu"
    class="demo-top-app-bar"
    v-shadow="4"
  >
    Persistent Drawer
  </ui-top-app-bar>

  <div :class="[$tt('body1'), 'demo-content']">
    <div :class="$tt('body2')">
      <h1 :class="$tt('headline4')">Persistent Drawer</h1>
      <p>Click the menu icon above to open and close the drawer.</p>
    </div>
  </div>
</ui-drawer-app-content>
```
