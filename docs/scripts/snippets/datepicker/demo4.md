```html
<ui-datepicker
  noLabel
  placeholder="Select Date Range.."
  :config="config"
  v-model="date"
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      config: {
        mode: 'range'
      },
      date: ['2017-11-10', '2017-11-20']
    };
  }
};
```
