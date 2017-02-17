```html
<ui-datepicker :config="config"
  :model="date"
  placeholder="Select Date.."
  toggle
  @change="onChange('date', $event)">
  <i slot="toggle" class="fa fa-calendar"></i>
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        defaultDate: 'today'
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
