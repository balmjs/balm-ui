```html
<ui-button unelevated>Baseline</ui-button>
<ui-button unelevated dense>Dense</ui-button>
<ui-button unelevated :class="'secondary-text-button'">Secondary</ui-button>
<ui-button unelevated icon="favorite">Icon</ui-button>
<ui-button unelevated>
  <template slot-scope="{ className }">
    <!-- Custom SVG -->
    <ui-logo :class="className.icon"></ui-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link unelevated>Link</ui-link>
```
