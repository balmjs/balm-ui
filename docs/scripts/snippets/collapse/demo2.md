```html
<ui-collapse v-for="i in 3" :key="i" withIcon ripple>
  <template #toggle>
    <div>Heading {{ i }}</div>
  </template>
  <div>Content {{ i }}</div>
</ui-collapse>
```
