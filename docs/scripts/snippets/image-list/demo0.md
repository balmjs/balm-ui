Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-image-list>` props.
  UiImageList: {
    // some props
  },
  // Optional. Overwrite `<ui-image-item>` props.
  UiImageItem: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiImageListComponents from 'balm-ui/components/image-list';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/image-list.css';

// Optional.
UiImageListComponents.config({
  // Overwrite `<ui-image-list>` props.
  UiImageList: {
    // some props
  },
  // Overwrite `<ui-image-item>` props.
  UiImageItem: {
    // some props
  }
});

for (let key in UiImageListComponents) {
  let Component = UiImageListComponents[key];
  Vue.component(Component.name, Component);
}
```
