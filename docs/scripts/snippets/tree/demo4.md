```html
<ui-tree
  v-model="selectedValue"
  :data="treeData"
  :data-format="dataFormat"
  :max-level="3"
  autoExpandParent
  :default-expanded-keys="defaultKeys"
>
  <p>selectedValue: {{ selectedValue }}</p>
</ui-tree>
```

```js
export default {
  data() {
    return {
      dataFormat: { label: 'title', value: 'key' },
      treeData: [{
        title: 'node1',
        key: '1',
        children: [
          {
            title: 'node1-1',
            key: '1-1',
            children: [
              {
                title: 'node2',
                key: '2',
                children: [
                  {
                    title: 'node2-1',
                    key: '2-1',
                  },
                ],
              },
            ]
          },
          {
            title: 'node1-2',
            key: '1-2',
            children: [
              {
                title: 'node1-2-1',
                key: '1-2-1'
              }
            ]
          }
        ],
      },]
      selectedValue: '1',
      defaultKeys: ['1', '1-1', '1-2', '2'],
    };
  }
};
```
