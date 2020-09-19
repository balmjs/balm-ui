```html
<ui-datepicker
  v-model="date"
  :config="config"
  placeholder="Select Datetime.."
  toggle
  clear
>
  <template #toggle>
    <i class="fa fa-calendar"></i>
  </template>
  <template #clear>
    <i class="fa fa-close"></i>
  </template>
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      config: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i'
      },
      date: ''
    };
  }
};
```
