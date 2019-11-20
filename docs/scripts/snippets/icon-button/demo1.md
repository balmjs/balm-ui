```html
<!-- Material Icons -->
<ui-icon-button icon="favorite"></ui-icon-button>
<ui-icon-button icon="airplanemode_active"></ui-icon-button>
<ui-icon-a icon="directions_transit"></ui-icon-a>

<!-- SVG Icon -->
<ui-icon-button>
  <svg-logo></svg-logo>
</ui-icon-button>

<!-- Disabled Buttons -->
<ui-icon-button disabled icon="airplanemode_active"></ui-icon-button>
<ui-icon-button disabled>
  <svg-logo></svg-logo>
</ui-icon-button>

<!-- Larger Buttons -->
<ui-icon-button
  class="demo-icon-button-large"
  icon="airplanemode_active"
></ui-icon-button>
<ui-icon-button class="demo-icon-button-large">
  <svg-logo></svg-logo>
</ui-icon-button>
```

```css
.demo-icon-button-large {
  width: 72px;
  height: 72px;
  padding: 18px;
  font-size: 36px;
}
```
