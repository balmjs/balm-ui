```html
<ui-datepicker :config="config"
  :model="date"
  placeholder="Select Date Range.."
  @change="onChange('date', $event)"></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'range'
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
