```html
<ui-drawer>
  <ui-drawer-header>
    <ui-drawer-title>{{ title }}</ui-drawer-title>
    <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-list>
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

<main class="demo-main">
  <ui-top-app-bar
    contentSelector=".demo-content"
    class="demo-top-app-bar"
    v-shadow="4"
  >
    <template #nav-icon>
      <ui-icon @click="$router.back()">arrow_back</ui-icon>
    </template>
    Permanent Drawer Above Toolbar
  </ui-top-app-bar>

  <div :class="[$tt('body1'), 'demo-content']">
    <div :class="$tt('body2')">
      <h1 :class="$tt('headline4')">Permanent Drawer</h1>
      <p>It sits to the left of this content.</p>
    </div>
  </div>
</main>
```
