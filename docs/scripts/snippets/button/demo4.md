```html
<ui-button outlined>Baseline</ui-button>
<ui-button outlined dense>Dense</ui-button>
<ui-button outlined class="secondary-outlined-button">Secondary</ui-button>
<ui-button outlined icon="favorite">Icon</ui-button>
<ui-button outlined>
  <template slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconCLass"></svg-logo>
    SVG Icon
  </template>
</ui-button>
<ui-a outlined>Link</ui-a>
```

```css
/* Sass code */
.mdc-button.secondary-outlined-button {
  @include mdc-button-ink-color($mdc-theme-secondary);
  @include mdc-button-outline-color($mdc-theme-secondary);
}
```
