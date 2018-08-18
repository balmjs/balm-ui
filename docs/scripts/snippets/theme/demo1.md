```html
<fieldset class="demo-fieldset--color">
  <legend :class="$tt('subtitle1')">Theme colors as text</legend>

  <div class="demo-theme-color-group">
    <div class="demo-theme-color-swatches">
      <div :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $themeColor('primary')]">Primary</div>
    </div>
    <div class="demo-theme-color-swatches">
      <div :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $themeColor('secondary')]">Secondary</div>
    </div>
  </div>
</fieldset>

<fieldset class="demo-fieldset--color">
  <legend :class="$tt('subtitle1')">Theme colors as background</legend>

  <div class="demo-theme-color-group">
    <div class="demo-theme-color-swatches">
      <div :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $themeColor('primary-bg'),
        $themeColor('on-primary')]">Primary</div>
    </div>
    <div class="demo-theme-color-swatches">
      <div :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $themeColor('secondary-bg'),
        $themeColor('on-secondary')]">Secondary</div>
    </div>
    <div class="demo-theme-color-swatches">
      <div :class="[
        'demo-theme-color-swatch demo-theme-color-swatch--elevated',
        $themeColor('background'),
        $textColor('primary')]">Background</div>
    </div>
  </div>
</fieldset>
```
