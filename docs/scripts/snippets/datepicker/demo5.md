```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Month.."
  :monthOptions="monthOptions"
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'month' // New in `7.4.2`
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
