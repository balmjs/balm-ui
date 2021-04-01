```html
<ui-panels>
  <!-- the panel components -->
  <ui-panel><!-- the panel content --></ui-panel>
</ui-panels>
```

### Props

| Name                 | Type   | Default | Description      |
| -------------------- | ------ | ------- | ---------------- |
| `active` (`v-model`) | number | `0`     | 激活的标签页索引 |

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含标签页面板组件及 HTML |

```html
<ui-tabs v-model="active">
  <ui-tab>Tab One</ui-tab>
  <ui-tab>Tab Two</ui-tab>
  <ui-tab>Tab Three</ui-tab>
</ui-tabs>

<ui-panels v-model="active">
  <ui-panel>Panel One</ui-panel>
  <ui-panel>Panel Two</ui-panel>
  <ui-panel>Panel Three</ui-panel>
</ui-panels>
```
