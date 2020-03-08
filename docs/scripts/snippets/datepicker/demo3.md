```html
<ui-datepicker
  placeholder="Select Multi Date.."
  :config="config"
  v-model="date"
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
