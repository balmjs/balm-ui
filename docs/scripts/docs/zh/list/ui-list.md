```html
<ui-list-group>
  <ui-list-group-subheader>1. Single-line list</ui-list-group-subheader>
  <ui-list>
    <ui-item>
      <ui-item-text-content></ui-item-text-content>
    </ui-item>
  </ui-list>

  <ui-list-divider></ui-list-divider>

  <ui-list-group-subheader>2. Two-line list</ui-list-group-subheader>
  <ui-list type="twoLine">
    <ui-item>
      <ui-item-text-content>
        <ui-item-text1></ui-item-text1>
        <ui-item-text2></ui-item-text2>
      </ui-item-text-content>
    </ui-item>
  </ui-list>

  <ui-list-divider></ui-list-divider>

  <ui-list-group-subheader>3. Rich List</ui-list-group-subheader>
  <ui-list>
    <ui-item>
      <ui-item-first-content></ui-item-first-content>
      <ui-item-text-content></ui-item-text-content>
      <ui-item-last-content></ui-item-last-content>
    </ui-item>
  </ui-list>
</ui-list-group>
```

```html
<ui-nav>
  <ui-nav-item active>Activated item</ui-nav-item>
  <ui-nav-item>Unactivated item</ui-nav-item>
</ui-nav>
```

| Component                   | Description                                                                      |
| --------------------------- | -------------------------------------------------------------------------------- |
| `<ui-list>`/`<ui-nav>`      | 列表元素                                                                         |
| `<ui-item>`/`<ui-nav-item>` | 列表项元素                                                                       |
| `<ui-item-text-content>`    | 列表项文本内容容器（显示为列表项的中间列）                                       |
| `<ui-item-text1>`           | 列表项的主要文字。应该是 `<ui-item-text-content>` 的子元素。                     |
| `<ui-item-text2>`           | 列表项的次要文字。显示在主要文字下方。应该是 `<ui-item-text-content>` 的子元素。 |
| `<ui-item-first-content>`   | 列表项每行的第一个区块。通常是图标或图像。                                       |
| `<ui-item-last-content>`    | 列表项每行的最后一个区块。通常为小文字，图标或图像。                             |
| `<ui-list-group>`           | 分组列表容器。两个或多个要分组在一起的 `<ui-list>` 元素的容器                    |
| `<ui-list-group-subheader>` | 分组列表标题。标题文本显示在组中每个列表上方。                                   |
| `<ui-list-divider>`         | 列表分割线                                                                       |
| `<ui-item-divider>`         | 列表项分割线                                                                     |
