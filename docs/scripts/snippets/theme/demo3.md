```html
<div class="demo-theme-color-section__row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on primary</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row', $themeColor('primary-bg'), $tt('body2')]">
        <span :class="['demo-theme-text-style', $themeColor('on-primary')]">Text</span>
        <span :class="['demo-theme-text-style', $themeColor('on-primary'), 'material-icons']">favorite</span>
      </div>
    </div>
  </fieldset>

  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on secondary</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row', $themeColor('secondary-bg'), $tt('body2')]">
        <span :class="['demo-theme-text-style', $themeColor('on-secondary')]">Text</span>
        <span :class="['demo-theme-text-style', $themeColor('on-secondary'), 'material-icons']">favorite</span>
      </div>
    </div>
  </fieldset>
</div>
```
