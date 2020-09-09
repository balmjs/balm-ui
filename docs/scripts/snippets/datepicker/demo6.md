```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Time.."
></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'time'
        // time_24hr: true
      }
    };
  }
};
```
