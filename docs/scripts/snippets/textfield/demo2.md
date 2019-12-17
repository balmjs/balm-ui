```html
<ui-textfield
  type="password"
  id="pw"
  required
  pattern=".{8,}"
  helptextId="pw-validation-msg"
  :attrs="{autocomplete: 'current-password'}"
>
  Choose password
</ui-textfield>
<ui-textfield-helper id="pw-validation-msg" visible validMsg>
  Must be at least 8 characters long
</ui-textfield-helper>
```
