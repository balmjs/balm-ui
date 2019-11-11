```html
<ui-button cssOnly>Text</ui-button>
<ui-button cssOnly outlined>Outlined</ui-button>
<ui-button cssOnly raised>Raised</ui-button>

<ui-button cssOnly icon="favorite">Icon</ui-button>
<ui-button cssOnly>
  Trailing Icon
  <template slot="after" slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-button>

<ui-a>Link</ui-a>
```

```css
/* Sass code */
.mdc-button.secondary-filled-button {
  @include mdc-button-filled-accessible($mdc-theme-secondary);
}
```
