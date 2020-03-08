```html
<ui-datepicker
  placeholder="Select Datetime.."
  toggle
  clear
  :config="config"
  v-model="date"
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
