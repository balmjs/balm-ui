```html
<fieldset class="demo-fieldset--color">
  <legend :class="$tt('subtitle1')">Theme colors as text</legend>

  <div class="demo-theme-color-group">
    <div class="demo-theme-color-swatches">
      <div
        :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $theme.getThemeClass('primary')]"
      >
        Primary
      </div>
    </div>
    <div class="demo-theme-color-swatches">
      <div
        :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $theme.getThemeClass('secondary')]"
      >
        Secondary
      </div>
    </div>
  </div>
</fieldset>

<fieldset class="demo-fieldset--color">
  <legend :class="$tt('subtitle1')">Theme colors as background</legend>

  <div class="demo-theme-color-group">
    <div class="demo-theme-color-swatches">
      <div
        :class="[
          'demo-theme-color-swatch demo-theme-color-swatch--elevated',
          $theme.getThemeClass(['primary-bg', 'on-primary'])
        ]"
      >
        Primary
      </div>
    </div>
    <div class="demo-theme-color-swatches">
      <div
        :class="[
          'demo-theme-color-swatch demo-theme-color-swatch--elevated',
          $theme.getThemeClass(['secondary-bg', 'on-secondary'])
        ]"
      >
        Secondary
      </div>
    </div>
    <div class="demo-theme-color-swatches">
      <div
        :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $theme.getThemeClass('background'),
        $theme.getTextClass('primary')]"
      >
        Background
      </div>
    </div>
  </div>
</fieldset>
```
