```html
<ui-select :value="options" :model="selected" defaultValue="All items" @change="onChange('selected', $event)"></ui-select>
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
    onChange(field, option) {
      this[field] = option.key;
    }
  }
};
```
