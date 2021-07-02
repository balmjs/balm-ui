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

| Component            | Description                         |
| -------------------- | ----------------------------------- |
| `<ui-tabs>`          | `<ui-tab-bar>` 和 `<ui-tab>` 的缩写 |
| `<ui-tab-bar>`       | 标签页容器                          |
| `<ui-tab>`           | 标签页                              |
| `<ui-panels>`        | 标签页面板容器                      |
| `<ui-panel>`         | 标签页面板                          |
| `<ui-tab-indicator>` | 包含自定义标签页指示器的内容        |
| `<ui-tab-scroller>`  | 包含自定义标签页滚动器的内容        |
