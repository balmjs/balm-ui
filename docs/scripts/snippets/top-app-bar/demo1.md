```html
<div class="demo--top-app-bar">
  <ui-top-app-bar
    contentSelector="#content-main"
    navId="demo-menu"
    :type="selected"
    :title="title"
  >
    <template #toolbar="{ itemClass }">
      <ui-icon-a
        v-if="!isShort"
        :class="itemClass"
        icon="file_download"
      ></ui-icon-a>
      <ui-menu-anchor v-if="isShort">
        <ui-icon-button
          :class="itemClass"
          icon="more_vert"
          @click="$balmUI.onOpen('showMoreActions')"
        ></ui-icon-button>
        <ui-menu
          v-model="showMoreActions"
          :items="[
              'Back',
              'Forward',
              'Reload',
              '-',
              'Settings'
            ]"
        ></ui-menu>
      </ui-menu-anchor>
    </template>
  </ui-top-app-bar>

  <ui-drawer type="modal" v-model="openDrawer" menuSelector="#demo-menu">
    <ui-drawer-header
      :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]"
    >
      <ui-drawer-title>Header here</ui-drawer-title>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list>
        <ui-item-a activated @click.native="() => { $router.back(); }">
          <ui-item-first-content icon="arrow_back"></ui-item-first-content>
          <ui-item-text-content>Back</ui-item-text-content>
        </ui-item-a>
        <ui-list-divider></ui-list-divider>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>

  <ui-drawer-scrim></ui-drawer-scrim>

  <main class="demo-main">
    <div id="content-main">
      <p v-for="i in 12" :key="i" class="demo-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </main>
</div>
```

```js
export default {
  data() {
    return {
      title: 'Hello BalmUI',
      openDrawer: false,
      showMoreActions: false
    };
  }
};
```
