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

| Component            | Description                            |
| -------------------- | -------------------------------------- |
| `<ui-tabs>`          | `<ui-tab-bar>` 和 `<ui-tab>` 的缩写    |
| `<ui-tab-bar>`       | （父元素）选项卡标签容器               |
| `<ui-tab>`           | （子元素）选项卡标签                   |
| `<ui-panels>`        | （父元素）选项卡面板容器               |
| `<ui-panel>`         | （子元素）选项卡面板                   |
| `<ui-tab-indicator>` | （子元素）包含自定义选项卡指示器的内容 |
| `<ui-tab-scroller>`  | 包含自定义选项卡滚动器的内容           |
