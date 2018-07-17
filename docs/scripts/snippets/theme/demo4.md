```html
<div class="demo-theme-color-section__row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on user-defined light background</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row demo-theme-bg--custom-light', $tt('body2')]">
        <span :class="['demo-theme-text-style', $textColor('primary', 'light')]">Primary</span>
        <span :class="['demo-theme-text-style', $textColor('secondary', 'light')]">Secondary</span>
        <span :class="['demo-theme-text-style', $textColor('hint', 'light')]">Hint</span>
        <span :class="['demo-theme-text-style', $textColor('disabled', 'light')]">Disabled</span>
        <span :class="['demo-theme-text-style', $textColor('icon', 'light'), 'material-icons']">favorite</span>
      </div>
    </div>
  </fieldset>

  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on user-defined dark background</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row demo-theme-bg--custom-dark', $tt('body2')]">
        <span :class="['demo-theme-text-style', $textColor('primary', 'dark')]">Primary</span>
        <span :class="['demo-theme-text-style', $textColor('secondary', 'dark')]">Secondary</span>
        <span :class="['demo-theme-text-style', $textColor('hint', 'dark')]">Hint</span>
        <span :class="['demo-theme-text-style', $textColor('disabled', 'dark')]">Disabled</span>
        <span :class="['demo-theme-text-style', $textColor('icon', 'dark'), 'material-icons']">favorite</span>
      </div>
    </div>
  </fieldset>
</div>
```
