### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-field';
```

```js
import Vue from 'vue';
import UiForm from 'balm-ui/components/form';
import UiFormField from 'balm-ui/components/form-field';

Vue.use(UiForm);
Vue.use(UiFormField);
```
