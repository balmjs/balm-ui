```html
<div class="demo--top-app-bar">
  <ui-top-app-bar
    contentSelector="#content-main"
    navId="demo-menu"
    :type="type"
    :title="title"
  >
    <template #toolbar="{ itemClass }">
      <template v-if="!isShort">
        <ui-icon-a :class="itemClass" icon="file_download"></ui-icon-a>
        <ui-icon-a :class="itemClass" icon="print"></ui-icon-a>
        <ui-icon-a :class="itemClass" icon="bookmark"></ui-icon-a>
      </template>
      <ui-menu-anchor v-if="isShort">
        <ui-icon-button
          :class="itemClass"
          icon="more_vert"
          @click="$balmUI.onOpen('showMoreActions')"
        ></ui-icon-button>
        <ui-menu
          v-model="showMoreActions"
          :items="['Back', 'Forward', 'Reload', '-', 'Settings']"
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
        <ui-item activated @click="$router.back()">
          <ui-item-first-content icon="arrow_back"></ui-item-first-content>
          <ui-item-text-content>Back</ui-item-text-content>
        </ui-item>
        <ui-list-divider></ui-list-divider>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>

  <ui-drawer-backdrop></ui-drawer-backdrop>

  <main class="demo-main">
    <div id="content-main">
      <p v-for="i in 12" :key="i" class="demo-paragraph">
        Content
      </p>
    </div>
  </main>
</div>
```

```js
export default {
  data() {
    return {
      type: 0,
      title: 'Hello BalmUI',
      openDrawer: false,
      showMoreActions: false
    };
  }
};
```
