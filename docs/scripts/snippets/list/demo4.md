```html
<ui-list singleSelection v-model="selectedIndex">
  <ui-item v-for="(item, index) in items2" :key="index">
    <ui-item-first-content>
      <ui-icon>{{ item.icon }}</ui-icon>
    </ui-item-first-content>
    <ui-item-text-content>{{ item.text }}</ui-item-text-content>
  </ui-item>
</ui-list>
```

```js
export default {
  data() {
    return {
      selectedIndex: 1
    };
  }
};
```
