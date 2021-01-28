```html
<ui-form class="conditions-form" nowrap action-align="center">
  <template #default="{ itemClass, actionClass }">
    <ui-grid>
      <ui-grid-cell>
        <ui-form-field :class="[itemClass, 'required']">
          <label>Label1</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
      </ui-grid-cell>
      <ui-grid-cell>
        <ui-form-field :class="itemClass">
          <label>Label2</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
      </ui-grid-cell>
      <ui-grid-cell>
        <ui-form-field :class="itemClass">
          <label>Label3</label>
          <ui-select></ui-select>
        </ui-form-field>
      </ui-grid-cell>
      <ui-grid-cell>
        <ui-form-field :class="itemClass">
          <label>Label4</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
      </ui-grid-cell>
      <ui-grid-cell>
        <ui-form-field :class="itemClass">
          <label>Label5</label>
          <ui-select></ui-select>
        </ui-form-field>
      </ui-grid-cell>
    </ui-grid>
    <ui-form-field :class="actionClass">
      <ui-button raised>Search</ui-button>
      <ui-button outlined>Reset</ui-button>
    </ui-form-field>
  </template>
</ui-form>
```

```scss
.conditions-form {
  .mdc-form__item > label {
    flex-basis: 80px;
    margin-right: 10px;
    text-align: right;
  }

  .mdc-text-field,
  .mdc-select {
    min-width: 200px;
  }
}
```
