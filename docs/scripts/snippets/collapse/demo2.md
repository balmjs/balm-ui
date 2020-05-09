```html
<ui-nav>
  <template #default="{ itemClass }">
    <ui-collapse withIcon v-for="i in 3" :key="i">
      <template #toggle>
        <div :class="itemClass">Heading {{ i }}</div>
      </template>
      <div>Content {{ i }}</div>
    </ui-collapse>
  </template>
</ui-nav>
```
