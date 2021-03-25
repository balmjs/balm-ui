```html
<ui-panels>
  <!-- the panel components -->
  <ui-panel><!-- the panel content --></ui-panel>
</ui-panels>
```

### Props

| Name                     | Type   | Default | Description          |
| ------------------------ | ------ | ------- | -------------------- |
| `modelValue` (`v-model`) | number | `0`     | 激动的选项卡标签索引 |

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡面板组件及 HTML |

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
