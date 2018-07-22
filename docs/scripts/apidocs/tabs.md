```html
<ui-tabs></ui-tabs>
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
<ui-tab-bar-scroller><!-- the tab components --></ui-tab-bar-scroller>
```

> `<ui-tabs>` is shorthand for `<ui-tab-bar>`.

#### Props

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

| Name      | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| (default) | The default slot holds the tab components and can contain HTML. (`<ui-tabs>` has not slot) |

#### Events

| Name   | Type                      | Description                    |
| ------ | ------------------------- | ------------------------------ |
| change | `Function(model: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@change` and update the `active` prop.

```html
// Automatic
<ui-tabs v-model="active"></ui-tabs>

// Manual
<ui-tabs :active="active" @change="$balmUI.onChange('active', $event)"></ui-tabs>
```

---

```html
<ui-tabs></ui-tabs>
```

#### Props

| Name  | Type     | Default             | Description               |
| ----- | -------- | ------------------- | ------------------------- |
| items | `Array`  | `[]`                | Mandatory. Tab items.     |
| keys  | `Object` | `{text, icon, url}` | A tab item object's keys. |

- Default keys of a tab item object:

```js
{
  text: 'text', // label text
  icon: 'icon', // label icon
  url: 'url'    // label link (for hash symbol)
}
```

- `<ui-tabs>` = `<ui-tab-bar>` + `<ui-tab>`

```html
<!-- full syntax -->
<ui-tab-bar v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index" :icon="tab.icon">
    {{ tab.text }}
  </ui-tab>
</ui-tab-bar>

<!-- shorthand -->
<ui-tabs v-model="active" :items="tabs"></ui-tabs>
```
