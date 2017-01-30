```html
<ui-textfield label="Number..." :model="text" @input.native="onInputChange('text', $event)"
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"></ui-textfield>
```
