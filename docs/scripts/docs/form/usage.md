### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/form-field/form-field.scss';
```

```js
import Vue from 'vue';
import UiForm from 'balm-ui/components/form';
import UiFormField from 'balm-ui/components/form-field';

Vue.use(UiForm);
Vue.use(UiFormField);
```
