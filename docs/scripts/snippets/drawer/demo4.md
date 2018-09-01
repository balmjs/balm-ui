```html
<ui-top-app-bar fixed contentSelector=".demo-main" navId="demo-menu">
  Temporary Drawer
</ui-top-app-bar>

<ui-modal-drawer menuSelector="#demo-menu">
  <ui-drawer-header>
    <ui-drawer-title>{{ title }}</ui-drawer-title>
    <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-list-nav>
      <ui-item-link
        firstIcon="arrow_back"
        @click.native="() => { $router.back(); }">
        Back
      </ui-item-link>
      <ui-list-divider></ui-list-divider>
      <template v-for="(item, index) in menu">
        <ui-list-divider v-if="item === '-'" :key="`divider-${index}`"></ui-list-divider>
        <template v-else>
          <ui-list-group-subheader v-if="item.subheader" :key="`subheader-${index}`">
            {{ item.subheader }}
          </ui-list-group-subheader>
          <ui-item-link v-for="(subItem, subIndex) in item.items"
            :key="`item-${index}-${subIndex}`"
            :firstIcon="subItem.icon">
            {{ subItem.name }}
          </ui-item-link>
        </template>
      </template>
    </ui-list-nav>
  </ui-drawer-content>
</ui-modal-drawer>

<ui-drawer-scrim></ui-drawer-scrim>

<main :class="[$tt('body1'), 'demo-main']">
  <div :class="$tt('body2')">
    <h1 :class="$tt('headline4')">Temporary Drawer</h1>
    <p>Click the menu icon above to open.</p>
  </div>
</main>
```
