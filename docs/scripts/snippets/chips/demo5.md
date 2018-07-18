```html
<ui-chip-set>
  <ui-chip v-for="(item, index) in actionList"
    :key="index"
    class="demo-chip custom-chip-primary">
    <ui-chip-text>{{ item.name }}</ui-chip-text>
  </ui-chip>
</ui-chip-set>
<ui-chip-set>
  <ui-chip v-for="(item, index) in actionList"
    :key="index"
    class="demo-chip custom-chip-secondary">
    <ui-chip-text>{{ item.name }}</ui-chip-text>
  </ui-chip>
</ui-chip-set>
```

```js
export default {
  data() {
    return {
      actionList: [
        {
          icon: 'wb_sunny',
          name: 'Turn on lights'
        },
        {
          icon: 'bookmark',
          name: 'Bookmark'
        },
        {
          icon: 'alarm',
          name: 'Set alarm'
        },
        {
          icon: 'directions',
          name: 'Get directions'
        }
      ]
    };
  }
};
```
