```html
<ui-tree
  v-model="selectedValue"
  :data="treeData"
  :data-format="dataFormat"
  :max-level="2"
  multiple
>
  <p>selectedValue: {{ selectedValue }}</p>
</ui-tree>
```

```js
export default {
  data() {
    return {
      dataFormat: { label: 'title', value: 'key' },
      treeData: [],
      selectedValue: []
    };
  }
};
```
