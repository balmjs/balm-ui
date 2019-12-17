```html
<ui-list>
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-first-content>
      <ui-icon>{{ item.icon }}</ui-icon>
    </ui-item-first-content>
    <ui-item-text-content>{{ item.text }}</ui-item-text-content>
  </ui-item>
</ui-list>
```
