```html
<ui-tab-bar-scroller v-model="active">
  <ui-tab v-for="i in 9" :key="i" :href="`#${i}`">
    Item {{ i }}
  </ui-tab>
</ui-tab-bar-scroller>
```
