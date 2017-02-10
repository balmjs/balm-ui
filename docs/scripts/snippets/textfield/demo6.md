```html
<ui-textfield :model="text7" @input.native="onInputChange('text7', $event)"
  label="Plus Text..."
  plus>
  <template slot="plus">
    <a href="javascript:void(0)">Button</a>
  </template>
</ui-textfield>
```
