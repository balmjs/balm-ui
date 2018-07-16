```html
<section class="example">
  <div>
    <h2>Theme Styles</h2>
    <div :class="['demo-surface', $themeColor('primary')]"
      v-ripple="1"
      v-shadow="1">
      Primary
    </div>
    <div :class="['demo-surface', $themeColor('secondary')]"
      v-ripple="2"
      v-shadow="2">
      Secondary
    </div>
  </div>

  <div>
    <h2>Theme Styles - CSS Only</h2>
    <div :class="['demo-surface', $themeColor('primary')]"
      v-ripple:cssOnly="1"
      v-shadow="2">
      Primary
    </div>
    <div :class="['demo-surface', $themeColor('secondary')]"
      v-ripple:cssOnly="2"
      v-shadow="2">
      Secondary
    </div>
  </div>
</section>
```
