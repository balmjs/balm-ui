```html
<ui-collapse v-for="i in 3" :key="i" withIcon :ripple="1">
  <template #expand-more-icon>
    <ui-icon>arrow_drop_down</ui-icon>
  </template>
  <template #expand-less-icon>
    <ui-icon>arrow_right</ui-icon>
  </template>
  <template #toggle>
    <div>Heading {{ i }}</div>
  </template>
  <div>Content {{ i }}</div>
</ui-collapse>
```
