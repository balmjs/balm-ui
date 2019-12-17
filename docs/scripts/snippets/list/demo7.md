```html
<ui-list>
  <template v-for="(item, index) in items">
    <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
    <ui-item v-else :key="index">
      <ui-item-text-content>{{ item.text }}</ui-item-text-content>
      <ui-item-last-content>
        <ui-checkbox v-model="checkedValues" :value="item.value"></ui-checkbox>
      </ui-item-last-content>
    </ui-item>
  </template>
</ui-list>
```

```js
export default {
  data() {
    return {
      checkedValues: []
    };
  }
};
```
