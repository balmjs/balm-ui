```html
<ui-button unelevated class="big-round-corner-button">Corner Radius</ui-button>
<ui-button outlined class="thick-outline-button">Thick Outline Width</ui-button>
```

```css
/* Sass code */
.mdc-button.big-round-corner-button {
  @include mdc-button-corner-radius(8px);
}

.mdc-button.thick-outline-button {
  @include mdc-button-outline-width(4px);
}
```
