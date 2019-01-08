```html
<ui-button unelevated>Baseline</ui-button>
<ui-button unelevated dense>Dense</ui-button>
<ui-button unelevated class="secondary-filled-button">Secondary</ui-button>
<ui-button unelevated icon="favorite">Icon</ui-button>
<ui-button unelevated>
  <template slot="before" slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconCLass"></svg-logo>
  </template>
  SVG Icon
</ui-button>
<ui-a unelevated>Link</ui-a>
```

```css
/* Sass code */
.mdc-button.secondary-filled-button {
  @include mdc-button-filled-accessible($mdc-theme-secondary);
}
```
