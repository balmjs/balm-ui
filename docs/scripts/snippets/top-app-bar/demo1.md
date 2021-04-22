```html
<div class="page--top-app-bar">
  <ui-top-app-bar
    content-selector="#content-main"
    :type="type"
    :title="title"
    @nav="$balmUI.onShow('openDrawer')"
  >
    <template #toolbar="{ toolbarItemClass }">
      <ui-icon-button
        :class="toolbarItemClass"
        icon="file_download"
      ></ui-icon-button>
      <ui-icon-button :class="toolbarItemClass" icon="print"></ui-icon-button>
      <ui-icon-button
        :class="toolbarItemClass"
        icon="bookmark"
      ></ui-icon-button>
    </template>
  </ui-top-app-bar>

  <ui-drawer v-model="openDrawer" type="modal">
    <ui-drawer-header>
      <ui-drawer-title>Header here</ui-drawer-title>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list>
        <ui-item active>
          <ui-item-first-content>
            <ui-icon>arrow_back</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>Back</ui-item-text-content>
        </ui-item>
        <ui-list-divider></ui-list-divider>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>

  <div id="content-main">
    <p v-for="i in 36" :key="i">Content {{ i }}</p>
  </div>
</div>
```

```js
export default {
  data() {
    return {
      type: 0,
      title: 'Hello BalmUI',
      openDrawer: false
    };
  }
};
```
