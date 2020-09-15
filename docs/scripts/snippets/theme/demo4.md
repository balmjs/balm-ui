```html
<div class="demo-theme-color-section__row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">
      Text on user-defined light background
    </legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row demo-theme-bg--custom-light']">
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnLight('primary')]"
          >Primary</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnLight('secondary')]"
          >Secondary</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnLight('hint')]"
          >Hint</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnLight('disabled')]"
          >Disabled</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnLight('icon'), 'material-icons']"
          >favorite</span
        >
      </div>
    </div>
  </fieldset>

  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">
      Text on user-defined dark background
    </legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row demo-theme-bg--custom-dark']">
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnDark('primary')]"
          >Primary</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnDark('secondary')]"
          >Secondary</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnDark('hint')]"
          >Hint</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnDark('disabled')]"
          >Disabled</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClassOnDark('icon'), 'material-icons']"
          >favorite</span
        >
      </div>
    </div>
  </fieldset>
</div>
```
