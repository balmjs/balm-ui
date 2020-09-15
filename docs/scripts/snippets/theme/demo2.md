```html
<div class="demo-theme-color-section_row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on background</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row', $theme.getThemeClass('background')]">
        <span :class="['demo-theme-text-style', $theme.getTextClass('primary')]"
          >Primary</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClass('secondary')]"
          >Secondary</span
        >
        <span :class="['demo-theme-text-style', $theme.getTextClass('hint')]"
          >Hint</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClass('disabled')]"
          >Disabled</span
        >
        <span
          :class="['demo-theme-text-style', $theme.getTextClass('icon'), 'material-icons']"
          >favorite</span
        >
      </div>
    </div>
  </fieldset>
</div>
```
