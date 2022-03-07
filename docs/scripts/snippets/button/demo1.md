```html
<ui-button>Standard</ui-button>
<ui-button outlined>Outlined</ui-button>
<ui-button raised>Raised</ui-button>
<ui-button unelevated>Unelevated</ui-button>

<ui-button icon="favorite">Icon</ui-button>
<ui-button>
  Trailing Icon
  <template #after="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-button>

<a v-button href="javascript:void(0)">Link</a>
<router-link v-button to="/">Router Link</router-link>
```
