```html
<ui-textfield box leadingIcon>
  Your name
  <template slot="before">
    <ui-textfield-icon>event</ui-textfield-icon>
  </template>
</ui-textfield>
<ui-textfield box trailingIcon>
  Your name
  <template slot="after">
    <ui-textfield-icon>delete</ui-textfield-icon>
  </template>
</ui-textfield>

<ui-textfield outlined leadingIcon>
  <template slot="before" slot-scope="{ customIconClass }">
    <span :class="customIconClass">
      <i class="fa fa-smile-o fa-lg"></i>
    </span>
  </template>
  Your other name
</ui-textfield>
<ui-textfield outlined trailingIcon>
  Your other name
  <template slot="after" slot-scope="{ customIconClass }">
    <span :class="customIconClass">
      <i class="fa fa-close fa-lg"></i>
    </span>
  </template>
</ui-textfield>
```

```css
/* Sass code for custom icon */
.mdc-text-field__custom-icon {
  position: absolute;
  top: 16px;
}
.mdc-text-field--with-leading-icon {
  .mdc-text-field__custom-icon {
    left: 15px;
  }
}
.mdc-text-field--with-trailing-icon {
  .mdc-text-field__custom-icon {
    right: 15px;
  }
}
```
