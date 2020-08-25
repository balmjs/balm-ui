### Default Usage

```scss
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUINext from 'balm-ui/dist/balm-ui-next';

Vue.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/tabs/tabs.scss';
@use 'balm-ui/components/icon/icon.scss';
@use 'balm-ui/components/bottom-navigation/bottom-navigation.scss';
```

```js
import Vue from 'vue';
import UiBottomNavigation from 'balm-ui/components/bottom-navigation';

// Optional. Overwrite `<ui-bottom-navigation>` props with default value.
Vue.use(UiBottomNavigation, {
  // some props
});
```
