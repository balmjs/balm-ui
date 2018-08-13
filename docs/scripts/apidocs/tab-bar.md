```html
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
```

#### `<ui-tab-bar>` & `<ui-tabs>` Props

| Name             | Type     | Default | Description                                 |
| ---------------- | -------- | ------- | ------------------------------------------- |
| active (v-model) | `Number` | `0`     | Mandatory.                                  |
| align            | `String` | `null`  | Tab alignment. `['start', 'center', 'end']` |

#### `<ui-tab-bar>` Slots

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| (default) | The default slot holds the tab components and can contain HTML. |

> `<ui-tabs>` has not slot.

#### `<ui-tab-bar>` & `<ui-tabs>` Events

| Name   | Type                      | Description                    |
| ------ | ------------------------- | ------------------------------ |
| change | `Function(model: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@change` and update the `active` prop.

```html
// Automatic
<ui-tab-bar v-model="active"></ui-tab-bar>
<ui-tabs v-model="active"></ui-tabs>

// Manual
<ui-tab-bar :active="active" @change="$balmUI.onChange('active', $event)"></ui-tab-bar>
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
}
```

> `<ui-tabs>` is shorthand for `<ui-tab-bar>` and `<ui-tab>`.

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
