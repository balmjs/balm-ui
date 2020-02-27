### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$toast` options.
  toast: {
    // some options
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/snackbar/snackbar.scss';
```

```js
import Vue from 'vue';
import toast from 'balm-ui/plugins/toast';

// Optional. Overwrite `$toast` options.
Vue.use(toast, {
  // some options
});
```
