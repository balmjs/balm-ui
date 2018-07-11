```html
<ui-textfield box leadingIcon="event">
  Your name
</ui-textfield>
<ui-textfield box trailingIcon="delete">
  Your name
</ui-textfield>

<ui-textfield outlined leadingIcon>
  <template slot="before">
    <ui-icon>event</ui-icon>
  </template>
  Your other name
</ui-textfield>
<ui-textfield outlined trailingIcon>
  Your other name
  <template slot="after">
    <ui-icon>event</ui-icon>
  </template>
</ui-textfield>
```
