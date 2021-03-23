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

| Component               | Description              |
| ----------------------- | ------------------------ |
| `<ui-textfield>`        | 文本框元素               |
| `<ui-textfield-icon>`   | 文本框首/尾图标元素      |
| `<ui-textfield-helper>` | 帮助文本和字符计数器元素 |
