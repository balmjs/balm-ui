```html
<div class="icons-preview-code">
  <div v-for="i in [18, 24, 36, 48]" :key="i" class="icons-preview">
    <ui-icon :size="i">face</ui-icon>
    <div class="icon-caption">{{ i }}px</div>
  </div>
</div>
```
