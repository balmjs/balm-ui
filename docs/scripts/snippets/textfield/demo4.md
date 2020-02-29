```html
<ui-textfield>
  Your name
  <template #before>
    <ui-textfield-icon>event</ui-textfield-icon>
  </template>
</ui-textfield>
<ui-textfield>
  Your name
  <template #after>
    <ui-textfield-icon>delete</ui-textfield-icon>
  </template>
</ui-textfield>

<!-- Custom leading/trailing icon -->
<ui-textfield outlined withLeadingIcon>
  Your other name
  <template #before="{ iconClass }">
    <span :class="iconClass">
      <i class="fa fa-smile-o fa-lg"></i>
    </span>
  </template>
</ui-textfield>
<ui-textfield outlined withTrailingIcon>
  Your other name
  <template #after="{ iconClass }">
    <span :class="iconClass">
      <i class="fa fa-close fa-lg"></i>
    </span>
  </template>
</ui-textfield>
```
