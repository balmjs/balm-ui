```html
<ui-fab icon="favorite_border"></ui-fab>
<ui-fab icon="favorite_border" mini></ui-fab>

<ui-fab>
  <template slot-scope="{ className }">
    <ui-logo :class="className.icon"></ui-logo>
  </template>
</ui-fab>
<ui-fab mini>
  <template slot-scope="{ className }">
    <ui-logo :class="className.icon"></ui-logo>
  </template>
</ui-fab>

<ui-fab class="lightGreen800Fab" icon="favorite_border"></ui-fab>
<ui-fab class="lightGreen800Fab" icon="favorite_border" mini></ui-fab>
```

```css
/* Sass code */
.mdc-fab.lightGreen800Fab {
  @include mdc-fab-accessible($material-color-light-green-800);
}
```
