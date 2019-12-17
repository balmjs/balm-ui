```html
<ui-top-app-bar contentSelector=".demo-main" navId="demo-menu" fixed>
  Modal Drawer
</ui-top-app-bar>

<ui-drawer type="modal" menuSelector="#demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>{{ title }}</ui-drawer-title>
    <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-list>
      <ui-item activated @click="$router.back()">
        <ui-item-first-content>
          <ui-icon>arrow_back</ui-icon>
        </ui-item-first-content>
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
            <ui-item-first-content>
              <ui-icon>{{ subItem.icon }}</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>{{ subItem.name }}</ui-item-text-content>
          </ui-item>
        </template>
      </template>
    </ui-list>
  </ui-drawer-content>
</ui-drawer>

<ui-drawer-backdrop></ui-drawer-backdrop>

<main :class="[$tt('body1'), 'demo-main']">
  <div :class="$tt('body2')">
    <h1 :class="$tt('headline4')">Modal Drawer</h1>
    <p>Click the menu icon above to open.</p>
  </div>
</main>
```
