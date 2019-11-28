```html
<ui-list class="demo-list">
  <ui-item
    v-for="(item, index) in items"
    :key="index"
    v-ripple
    :firstIcon="item.icon"
  >
    {{ item.text }}
  </ui-item>
</ui-list>
```
