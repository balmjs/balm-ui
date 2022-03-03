```html
<ui-menu-anchor>
  <ui-menu :items="menuItems"></ui-menu>
</ui-menu-anchor>
```

```html
<ui-menu-anchor>
  <ui-menu>
    <ui-menuitem>
      <ui-menuitem-text>Label</ui-menuitem-text>
    </ui-menuitem>

    <ui-menuitem-divider></ui-menuitem-divider>

    <ui-menuitem nested>
      <ui-menuitem>
        <ui-menuitem-icon>Icon</ui-menuitem-icon>
        <ui-menuitem-text>Label</ui-menuitem-text>
      </ui-menuitem>
    </ui-menuitem>
  </ui-menu>
</ui-menu-anchor>
```

| Component               | Description                            |
| ----------------------- | -------------------------------------- |
| `<ui-menu-anchor>`      | 菜单锚定容器元素                       |
| `<ui-menu>`             | 菜单容器元素                           |
| `<ui-menuitem>`         | 菜单项                                 |
| `<ui-menuitem-text>`    | 菜单文本                               |
| `<ui-menuitem-icon>`    | 菜单图标                               |
| `<ui-menuitem-divider>` | 菜单项分割线（同 `<ui-item-divider>`） |
