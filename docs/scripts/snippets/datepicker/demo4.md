```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Date Range.."
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
