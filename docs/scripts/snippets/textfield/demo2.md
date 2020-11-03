```html
<ui-textfield
  input-type="password"
  required
  pattern=".{8,}"
  helper-text-id="pw-validation-msg"
  :attrs="{autocomplete: 'current-password'}"
>
  Choose password
</ui-textfield>
<ui-textfield-helper id="pw-validation-msg" visible validMsg>
  Must be at least 8 characters long
</ui-textfield-helper>
```
