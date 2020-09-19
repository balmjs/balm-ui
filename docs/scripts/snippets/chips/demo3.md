```html
<ui-chips
  v-model="selectedValue"
  type="filter"
  :options="filterList"
></ui-chips>

<ui-chips v-model="selectedValue2" type="filter">
  <ui-chip
    v-for="(item, index) in filterList2"
    :key="index"
    icon="face"
    :hidden="selectedValue2.includes(index)"
  >
    {{ item }}
  </ui-chip>
</ui-chips>
```

```js
export default {
  data() {
    return {
      selectedValue: ['a', 'b'],
      filterList: [
        {
          label: 'Tops',
          value: 'a'
        },
        {
          label: 'Bottoms',
          value: 'b'
        },
        {
          label: 'Shoes',
          value: 'c'
        },
        {
          label: 'Accessories',
          value: 'd'
        }
      ],
      selectedValue2: [0],
      filterList2: ['Alice', 'Bob', 'Charlie', 'David']
    };
  }
};
```
