```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Multi Date.."
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      config: {
        mode: 'multiple'
      },
      date: ['2017-11-05', '2017-11-15', '2017-11-25']
    };
  }
};
```
