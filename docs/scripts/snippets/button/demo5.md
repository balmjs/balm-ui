```html
<ui-button unelevated class="big-round-corner-button">Big Corner Radius</ui-button>
<ui-button outlined class="thick-outlined-button">Thick Outline Width</ui-button>
```

```css
/* Sass code */
.mdc-button.big-round-corner-button {
  @include mdc-button-corner-radius(8px);
}

.mdc-button.secondary-outlined-button {
  @include mdc-button-ink-color($mdc-theme-secondary);
  @include mdc-button-outline-color($mdc-theme-secondary);
}
```
