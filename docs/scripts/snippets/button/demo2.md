```html
<ui-button raised>Baseline</ui-button>
<ui-button raised dense>Dense</ui-button>
<ui-button raised :class="'secondary-text-button'">Secondary</ui-button>
<ui-button raised icon="favorite">Icon</ui-button>
<ui-button raised>
  <template slot-scope="{ className }">
    <!-- Custom SVG -->
    <ui-logo :class="className.icon"></ui-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link raised>Link</ui-link>
```
