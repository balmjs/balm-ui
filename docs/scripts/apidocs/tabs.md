### `<ui-tabs>` & `<ui-tab-bar>` & `<ui-tab-bar-scroller>`

#### Common Props

| Name             | Type     | Default  | Description                    |
| ---------------- | -------- | -------- | ------------------------------ |
| active (v-model) | `Number` | `0`      | Mandatory.                     |
| type             | `String` | `'text'` | The permutation of tab labels. |

- type

| Name     | Description    |
| -------- | -------------- |
| `'text'` | text only      |
| `'icon'` | icon only      |
| `'both'` | text with icon |

#### Slots

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| (default) | The default slot holds the tab item and can contain HTML. (`<ui-tabs>` has not slot) |

#### Common Events

| Name   | Type                      | Description                    |
| ------ | ------------------------- | ------------------------------ |
| change | `Function(model: number)` | Emits when the tab is changed. |

---

### `<ui-tabs>`

#### Props

| Name  | Type     | Default | Description               |
| ----- | -------- | ------- | ------------------------- |
| items | `Array`  | `[]`    | Mandatory. Tab items.     |
| keys  | `Object` | `{}`    | A tab item object's keys. |

- A tab item object:

```js
{
  label: 'Tab label',
  icon: 'Tab icon',
  text: 'Tab text',
  url: 'Tab url'
}
```

- `<ui-tabs>` = `<ui-tab-bar>` + `<ui-tab>`

```html
<!-- full syntax -->
<ui-tab-bar v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index">
    {{ tab.label }}
  </ui-tab>
</ui-tab-bar>

<!-- shorthand -->
<ui-tabs v-model="active" :items="tabs"></ui-tabs>
```
