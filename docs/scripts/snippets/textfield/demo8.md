```html
<ui-textfield label="Plus Text..." :model="text" @input.native="onInputChange('text', $event)"
  labelLeft
  placeholder="Placeholder..."
  plus>
  <template slot="plus"><a href="javascript:void(0)">Link</a></template>
</ui-textfield>
```
