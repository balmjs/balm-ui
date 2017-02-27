```html
<ui-select :options="options" :model="selected"
  defaultValue="All items" defaultKey="0"
  @change="onSelectChange('selected', $event)"></ui-select>
```

```js
export default {
  data() {
    return {
      selected: 0,
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
    onSelectChange(field, option) {
      this[field] = option.key;
    }
  }
};
```
