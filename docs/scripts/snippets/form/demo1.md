```html
<ui-form nowrap label-width="80">
  <template #default="{ actionClass }">
    <legend>Horizontal Form</legend>
    <ui-form-field>
      <label>Input:</label>
      <ui-textfield></ui-textfield>
    </ui-form-field>
    <ui-form-field>
      <label>Select:</label>
      <ui-select></ui-select>
    </ui-form-field>
    <ui-form-field :class="actionClass">
      <ui-button raised>Submit</ui-button>
      <ui-button outlined>Cancel</ui-button>
    </ui-form-field>
  </template>
</ui-form>
```
