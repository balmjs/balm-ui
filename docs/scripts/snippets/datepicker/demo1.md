```html
<ui-datepicker placeholder="Select Date.." :model="date" @input="onInput" plus>
  <i slot="plus" class="fa fa-calendar"></i>
</ui-datepicker>
```

```js
import 'flatpickrCss';

export default {
  data() {
    return {
      date: ''
    };
  },
  methods: {
    onInput(val) {
      this.date = val;
    }
  }
};
```

```js
// gulpfile.js

balm.config = {
  ...
  scripts: {
    ...
    alias: {
      flatpickrCss: 'flatpickr/dist/flatpickr.min.css'
    },
  ...
};
```
