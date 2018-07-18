```html
<h4>No leading icon (selectedIndexes: {{ selectedValue }})</h4>
<ui-chip-set filter v-model="selectedValue">
  <ui-chip v-for="(item, index) in filterList"
    :key="index"
    class="demo-chip">
    <ui-chip-checkmark></ui-chip-checkmark>
    <ui-chip-text>{{ item }}</ui-chip-text>
  </ui-chip>
</ui-chip-set>

<h4>With leading icon (selectedIndexes: {{ selectedValue2 }})</h4>
<ui-chip-set filter v-model="selectedValue2">
  <ui-chip v-for="(item, index) in filterList2"
    :key="index"
    class="demo-chip">
    <ui-chip-leading-icon :hidden="selectedValue2.includes(index)">face</ui-chip-leading-icon>
    <ui-chip-checkmark></ui-chip-checkmark>
    <ui-chip-text>{{ item }}</ui-chip-text>
  </ui-chip>
</ui-chip-set>
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
