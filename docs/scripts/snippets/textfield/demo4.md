```html
<ui-textfield leadingIcon>
  Your name
  <template #before>
    <ui-textfield-icon>event</ui-textfield-icon>
  </template>
</ui-textfield>
<ui-textfield trailingIcon>
  Your name
  <template #after>
    <ui-textfield-icon>delete</ui-textfield-icon>
  </template>
</ui-textfield>

<ui-textfield outlined leadingIcon>
  <template #before="{ iconClass }">
    <span :class="iconClass">
      <i class="fa fa-smile-o fa-lg"></i>
    </span>
  </template>
  Your other name
</ui-textfield>
<ui-textfield outlined trailingIcon>
  Your other name
  <template #after="{ iconClass }">
    <span :class="iconClass">
      <i class="fa fa-close fa-lg"></i>
    </span>
  </template>
</ui-textfield>
```
