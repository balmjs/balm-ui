```html
<ui-button outlined>Baseline</ui-button>
<ui-button outlined dense>Dense</ui-button>
<ui-button outlined :class="'secondary-text-button'">Secondary</ui-button>
<ui-button outlined icon="favorite">Icon</ui-button>
<ui-button outlined>
  <template slot-scope="{ className }">
    <!-- Custom SVG -->
    <ui-logo :class="className.icon"></ui-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link outlined>Link</ui-link>
```
