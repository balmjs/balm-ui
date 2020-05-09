```html
<ui-nav>
  <template #default="{ itemClass }">
    <ui-collapse v-for="i in 3" :key="i">
      <template #expand-more-icon>
        <ui-icon>arrow_drop_down</ui-icon>
      </template>
      <template #expand-less-icon>
        <ui-icon>arrow_right</ui-icon>
      </template>
      <template #toggle>
        <div :class="itemClass">Heading {{ i }}</div>
      </template>
      <div>Content {{ i }}</div>
    </ui-collapse>
  </template>
</ui-nav>
```
