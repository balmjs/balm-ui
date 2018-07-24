```html
<ui-list-nav class="demo-list">
  <ui-item-link v-for="(item, index) in items"
    :key="index"
    v-ripple
    :firstIcon="item.icon">
    {{ item.text }}
  </ui-item-link>
</ui-list-nav>
```
