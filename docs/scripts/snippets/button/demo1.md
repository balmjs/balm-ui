```html
<ui-button>Baseline</ui-button>
<ui-button dense>Dense</ui-button>
<ui-button class="secondary-text-button">Secondary</ui-button>
<ui-button icon="favorite">Icon</ui-button>
<ui-button>
  <template slot-scope="{ className }">
    <!-- Custom SVG -->
    <ui-logo :class="className.icon"></ui-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link>Link</ui-link>
```

```css
/* Sass code */
.mdc-button.secondary-text-button {
  @include mdc-button-ink-color($mdc-theme-secondary);
  @include mdc-states(secondary);
}
```
