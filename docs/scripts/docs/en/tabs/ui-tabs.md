```html
<ui-tabs :items="tabItems"></ui-tabs>
```

```html
<ui-tab-bar>
  <ui-tab>
    Tab Text
    <template #indicator>
      <ui-tab-indicator></ui-tab-indicator>
    </template>
  </ui-tab>
</ui-tab-bar>

<ui-panels>
  <ui-panel></ui-panel>
</ui-panels>
```

| Component            | Description                                    |
| -------------------- | ---------------------------------------------- |
| `<ui-tabs>`          | The shorthand for `<ui-tab-bar>` + `<ui-tab>`. |
| `<ui-tab-bar>`       | Tab items container.                           |
| `<ui-tab>`           | Tab item.                                      |
| `<ui-panels>`        | Tab panels container.                          |
| `<ui-panel>`         | Tab panel.                                     |
| `<ui-tab-indicator>` | Contains the custom tab indicator content.     |
| `<ui-tab-scroller>`  | Contains the custom tab scroller content.      |
