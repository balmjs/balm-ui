### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$alert` options.
  alert: {
    // some options
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/dialog/dialog.scss';
@use 'balm-ui/plugins/alert/alert.scss';
```

```js
import Vue from 'vue';
import $alert from 'balm-ui/plugins/alert';

// Optional. Overwrite `$alert` options.
Vue.use($alert, {
  // some options
});
```
