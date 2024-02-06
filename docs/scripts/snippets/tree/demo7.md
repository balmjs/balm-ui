```html
<ui-tree
  v-model="selectedValue"
  :data="treeData"
  :data-format="dataFormat"
  :max-level="3"
  auto-expand-all
>
  <template #title="{ data }">
    {{ data.title }}
  </template>
</ui-tree>
```

```js
export default {
  data() {
    return {
      dataFormat: { label: 'title', value: 'key', disabled: 'disabled' },
      treeData: [
        {
          title: 'node1',
          key: '1',
          disabled: true,
          children: [
            {
              title: 'node1-1',
              key: '1-1',
              disabled: false,
            },
          ]
        }
      ],
      selectedValue: '1-1',
    };
  }
};
```
