```html
<ui-fab cssOnly icon="favorite_border"></ui-fab>
<ui-fab cssOnly icon="favorite_border" mini></ui-fab>

<ui-fab cssOnly class="lightGreen800Fab" icon="favorite_border"></ui-fab>
<ui-fab cssOnly class="lightGreen800Fab" icon="favorite_border" mini></ui-fab>
```

```css
/* Sass code */
.mdc-fab.lightGreen800Fab {
  @include mdc-fab-accessible($material-color-light-green-800);
}
```
