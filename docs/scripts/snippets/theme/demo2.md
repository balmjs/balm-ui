```html
<div class="demo-theme-color-section_row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on background</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row', $themeColor('background'), $tt('body2')]">
        <span :class="['demo-theme-text-style', $textColor('primary')]">Primary</span>
        <span :class="['demo-theme-text-style', $textColor('secondary')]">Secondary</span>
        <span :class="['demo-theme-text-style', $textColor('hint')]">Hint</span>
        <span :class="['demo-theme-text-style', $textColor('disabled')]">Disabled</span>
        <span :class="['demo-theme-text-style', $textColor('icon'), 'material-icons']">favorite</span>
      </div>
    </div>
  </fieldset>
</div>
```
