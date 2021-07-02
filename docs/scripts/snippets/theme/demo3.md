```html
<div class="demo-theme-color-section__row">
  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on primary</legend>

    <div class="demo-theme-color-group">
      <div :class="['demo-theme-text-row', $theme.getThemeClass('primary-bg')]">
        <span
          :class="['demo-theme-text-style', $$theme.getThemeClass('on-primary')]"
        >
          Text
        </span>
        <span
          :class="['demo-theme-text-style', $$theme.getThemeClass('on-primary'), 'material-icons']"
        >
          favorite
        </span>
      </div>
    </div>
  </fieldset>

  <fieldset class="demo-fieldset--color">
    <legend :class="$tt('subtitle1')">Text on secondary</legend>

    <div class="demo-theme-color-group">
      <div
        :class="['demo-theme-text-row', $$theme.getThemeClass('secondary-bg')]"
      >
        <span
          :class="['demo-theme-text-style', $$theme.getThemeClass('on-secondary')]"
        >
          Text
        </span>
        <span
          :class="['demo-theme-text-style', $$theme.getThemeClass('on-secondary'), 'material-icons']"
        >
          favorite
        </span>
      </div>
    </div>
  </fieldset>
</div>
```
