```html
<ui-datepicker
  noLabel
  placeholder="Select Date.."
  toggle
  clear
  :config="config"
  v-model="date"
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      config: {
        defaultDate: 'today'
      },
      date: ''
    };
  }
};
```
