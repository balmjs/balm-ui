```html
<ui-datepicker label="Select Date.." :model="date" @input="onInput" plus>
  <i slot="plus" class="fa fa-calendar"></i>
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: ''
    };
  },
  methods: {
    onInput(val) {
      this.date = val;
    }
  }
};
```
