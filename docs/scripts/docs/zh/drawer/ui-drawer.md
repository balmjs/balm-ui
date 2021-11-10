```html
<ui-drawer>
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-nav>
      <ui-nav-item active>Activated link</ui-nav-item>
      <ui-nav-item>Unactivated link</ui-nav-item>
    </ui-nav>
  </ui-drawer-content>
</ui-drawer>
```

| Component                 | Description                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| `<ui-drawer>`             | 导航容器元素                                                                   |
| `<ui-drawer-header>`      | 导航顶部元素（不可滚动）                                                       |
| `<ui-drawer-title>`       | 导航主标题元素                                                                 |
| `<ui-drawer-subtitle>`    | 导航副标题元素                                                                 |
| `<ui-drawer-content>`     | 导航内容元素（可滚动）                                                         |
| `<ui-drawer-app-content>` | 导航打开/关闭时调整大小的同级元素。仅限应用于 `<ui-drawer type="dismissible">` |
