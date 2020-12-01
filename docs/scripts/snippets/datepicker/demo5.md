```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Month.."
  :month-options="monthOptions"
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'month'
      },
      monthOptions: {
        shorthand: true, // defaults to false
        dateFormat: 'm.y', // defaults to "F Y"
        altFormat: 'F Y' // defaults to "F Y"
      }
    };
  }
};
```
