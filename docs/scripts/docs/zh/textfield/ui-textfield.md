```html
<ui-form-field>
  <ui-textfield maxlength="20">
    <template #before>
      <ui-textfield-icon>event</ui-textfield-icon>
    </template>
    Floating Label Text
    <template #after>
      <ui-textfield-icon trailing>delete</ui-textfield-icon>
    </template>
  </ui-textfield>
  <ui-textfield-helper with-counter> Helper message </ui-textfield-helper>
</ui-form-field>
```

| Component               | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| `<ui-textfield>`        | Mandatory.                                                          |
| `<ui-textfield-icon>`   | Mandatory for leading/trailing icons.                               |
| `<ui-textfield-helper>` | Styles the container of helper text and character counter elements. |
