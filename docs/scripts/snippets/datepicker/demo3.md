```html
<ui-datepicker :config="config"
  :model="date"
  placeholder="Select Datetime.."
  toggle
  clear
  @change="onChange('date', $event)">
  <template slot="toggle">
    <i class="fa fa-calendar"></i>
  </template>
  <template slot="clear">
    <i class="fa fa-close"></i>
  </template>
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        enableTime: true
      }
    };
  },
  methods: {
    onChange(field, value) {
      this[field] = value;
    }
  }
};
```
