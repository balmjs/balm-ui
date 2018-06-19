```html
<ui-button unelevated class="demo-ink-color" icon="favorite">Ink Color</ui-button>
<ui-button outlined class="demo-icon-color" icon="favorite">Icon Color</ui-button>
```

```css
/* Sass code */
.demo-ink-color {
  @include mdc-button-icon-color(white);
  @include mdc-button-ink-color(orange);
  @include mdc-states(orange);
}

.demo-icon-color {
  @include mdc-button-icon-color(orange);
}
```
