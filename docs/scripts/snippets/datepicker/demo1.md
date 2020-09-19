```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Date.."
  toggle
  clear
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
