```html
<ui-chip-set choice v-model="selectedIndex">
  <ui-chip v-for="(item, index) in choiceList"
    :key="index"
    class="demo-chip">
    <ui-chip-text>{{ item }}</ui-chip-text>
  </ui-chip>
</ui-chip-set>
```

```js
export default {
  data() {
    return {
      selectedIndex: 2,
      choiceList: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
    };
  }
};
```
