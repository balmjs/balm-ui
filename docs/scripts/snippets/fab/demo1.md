```html
<ui-fab icon="favorite_border"></ui-fab>
<ui-fab icon="favorite_border" mini></ui-fab>

<ui-fab>
  <template #default="{ iconClass }">
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-fab>
<ui-fab mini>
  <template #default="{ iconClass }">
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-fab>
```
