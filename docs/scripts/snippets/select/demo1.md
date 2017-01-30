```html
<ui-select :value="options" :model="selected" defaultValue="全部" @change="onChange"></ui-select>
```

```js
export default {
  data() {
    return {
      selected: 2,
      options: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }]
    };
  },
  methods: {
    onChange(option) {
      this.selected = option.key;
    }
  }
};
```
