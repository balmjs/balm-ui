```html
<ui-chips type="filter" v-model="selectedValue">
  <ui-chip v-for="(item, index) in filterList" :key="index">{{ item }}</ui-chip>
</ui-chips>

<ui-chips type="filter" v-model="selectedValue2">
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
      selectedValue: [1, 2],
      selectedValue2: [0],
      filterList: ['Tops', 'Bottoms', 'Shoes', 'Accessories'],
      filterList2: ['Alice', 'Bob', 'Charlie', 'David']
    };
  }
};
```
