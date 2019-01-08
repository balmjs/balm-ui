```html
<ui-button>Baseline</ui-button>
<ui-button dense>Dense</ui-button>
<ui-button class="secondary-text-button">Secondary</ui-button>
<ui-button icon="favorite">Icon</ui-button>
<ui-button>
  <template slot="before" slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconCLass"></svg-logo>
  </template>
  SVG Icon
</ui-button>
<ui-a>Link</ui-a>
```

```css
/* Sass code */
.mdc-button.secondary-text-button {
  @include mdc-button-ink-color($mdc-theme-secondary);
  @include mdc-states(secondary);
}
```
