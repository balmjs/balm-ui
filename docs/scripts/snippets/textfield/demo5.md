```html
<ui-textfield box leadingIcon="event">
  Your name
</ui-textfield>
<ui-textfield box trailingIcon="delete">
  Your name
</ui-textfield>

<ui-textfield outlined leadingIcon>
  <template slot="before">
    <i class="fa fa-smile-o fa-lg"></i>
  </template>
  Your other name
</ui-textfield>
<ui-textfield outlined trailingIcon>
  Your other name
  <template slot="after">
    <i class="fa fa-close fa-lg"></i>
  </template>
</ui-textfield>
```
