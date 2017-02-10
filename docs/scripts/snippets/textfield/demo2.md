```html
<ui-textfield :model="text2" @input.native="onInputChange('text2', $event)"
  label="Number..."
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"></ui-textfield>
```
