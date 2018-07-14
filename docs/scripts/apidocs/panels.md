### `<ui-panels>`

#### Props

| Name             | Type     | Default | Description |
| ---------------- | -------- | ------- | ----------- |
| active (v-model) | `Number` | `0`     | Mandatory.  |

#### Slots

| Name      | Description                                            |
| --------- | ------------------------------------------------------ |
| (default) | The default slot holds the panel and can contain HTML. |

```html
<ui-tab-bar v-model="active">
  <ui-tab>Tab One</ui-tab>
  <ui-tab>Tab Two</ui-tab>
  <ui-tab>Tab Three</ui-tab>
</ui-tab-bar>

<ui-panels v-model="active">
  <ui-panel>Panel One</ui-panel>
  <ui-panel>Panel Two</ui-panel>
  <ui-panel>Panel Three</ui-panel>
</ui-panels>
```
