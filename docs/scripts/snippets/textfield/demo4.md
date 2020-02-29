```html
<ui-textfield withLeadingIcon>
  Your name
  <template #before>
    <ui-textfield-icon>event</ui-textfield-icon>
  </template>
</ui-textfield>
<ui-textfield withTrailingIcon>
  Your name
  <template #after>
    <ui-textfield-icon>delete</ui-textfield-icon>
  </template>
</ui-textfield>

<ui-textfield outlined withLeadingIcon>
  <template #before="{ iconClass }">
    <span :class="iconClass">
      <i class="fa fa-smile-o fa-lg"></i>
    </span>
  </template>
  Your other name
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
