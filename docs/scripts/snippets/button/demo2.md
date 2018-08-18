```html
<ui-button raised>Baseline</ui-button>
<ui-button raised dense>Dense</ui-button>
<ui-button raised class="secondary-filled-button">Secondary</ui-button>
<ui-button raised icon="favorite">Icon</ui-button>
<ui-button raised>
  <template slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconCLass"></svg-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link raised>Link</ui-link>
```

```css
/* Sass code */
.mdc-button.secondary-filled-button {
  @include mdc-button-filled-accessible($mdc-theme-secondary);
}
```
