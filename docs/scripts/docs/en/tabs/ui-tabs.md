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

| Component            | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `<ui-tabs>`          | The shorthand for `<ui-tab-bar>` + `<ui-tab>`.             |
| `<ui-tab-bar>`       | (Parent element) Tab item container.                       |
| `<ui-tab>`           | (Child element) Tab item.                                  |
| `<ui-panels>`        | (Parent element) Tab panel container.                      |
| `<ui-panel>`         | (Child element) Tab panel.                                 |
| `<ui-tab-indicator>` | (Child element) Contains the custom tab indicator content. |
| `<ui-tab-scroller>`  | Contains the custom tab scroller content.                  |
