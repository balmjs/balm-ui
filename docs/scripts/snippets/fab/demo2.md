```html
<ui-fab extended>
  <template #before="{ iconClass }">
    <ui-icon :class="iconClass">add</ui-icon>
  </template>
  <span>Create</span>
</ui-fab>

<ui-fab extended>
  <span>Create</span>
  <template #after="{ iconClass }">
    <ui-icon :class="iconClass">add</ui-icon>
  </template>
</ui-fab>

<ui-fab extended>Create</ui-fab>
```
