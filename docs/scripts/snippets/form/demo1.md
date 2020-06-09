```html
<ui-form>
  <legend>Horizontal Form</legend>
  <ui-form-field class="form-item">
    <label>Input:</label>
    <ui-textfield></ui-textfield>
  </ui-form-field>
  <ui-form-field class="form-item">
    <label>Select:</label>
    <ui-select></ui-select>
  </ui-form-field>
  <ui-form-field class="form-action">
    <ui-button raised>Submit</ui-button>
    <ui-button outlined>Cancel</ui-button>
  </ui-form-field>
</ui-form>
```

```css
$label-width: 60px;

.mdc-form--horizontal {
  .form-item > label {
    width: $label-width;
  }

  .form-action {
    padding-left: $label-width;

    .mdc-button {
      margin-right: 10px;
    }
  }
}
```
