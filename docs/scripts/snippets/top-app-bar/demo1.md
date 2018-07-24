```html
<div class="demo--top-app-bar" :dir="controls.rtl ? 'rtl' : null">
  <ui-top-app-bar
    contentSelector="#content-main"
    navId="demo-menu"
    :actionItems="controls.noAction ? [] : items"
    :dense="controls.dense"
    :fixed="controls.fixed"
    :prominent="controls.prominent"
    :short="controls.short"
    :alwaysClosed="controls.alwaysCollapsed">
    San Francisco, CA
  </ui-top-app-bar>

  <ui-temporary-drawer menuSelector="#demo-menu">
    <ui-drawer-header :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]">
      Header here
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list-group>
        <ui-list-nav>
          <ui-item-link @click.native="() => { $router.back(); }" firstIcon="arrow_back">
            Back
          </ui-item-link>
          <ui-item-link v-for="(item, index) in menu1" :key="index" :firstIcon="item.icon">
            {{ item.name }}
          </ui-item-link>
        </ui-list-nav>
        <ui-list-divider></ui-list-divider>
        <ui-list-nav>
          <ui-item-link v-for="(item, index) in menu2" :key="index" :firstIcon="item.icon">
            {{ item.name }}
          </ui-item-link>
        </ui-list-nav>
      </ui-list-group>
    </ui-drawer-content>
  </ui-temporary-drawer>

  <main class="demo-main">
    <div id="content-main">
      <p v-for="i in 12" :key="i" class="demo-paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
      </p>
    </div>
  </main>
</div>
```

```js
export default {
  data() {
    return {
      items: [
        {
          icon: 'file_download',
          label: 'Download'
        }
      ],
      controls: {
        rtl: false,
        noAction: false,
        dense: false,
        fixed: false,
        prominent: false,
        short: false,
        alwaysCollapsed: false
      }
    };
  }
};
```
