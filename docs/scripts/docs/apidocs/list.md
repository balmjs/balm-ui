```html
<ui-list><!-- <ui-item> --></ui-list>
<ui-nav><!-- <ui-a> or <router-link> --></ui-nav>
```

#### Props

| Name              | Type           | Default | Description                                                                                                                                  |
| ----------------- | -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`            | number, string | `1`     | List types. {1: 'Single-line list', 2: 'Two-line list'}                                                                                      |
| `nonInteractive`  | boolean'       | `false` | Optional, disables interactivity affordances.                                                                                                |
| `dense`           | boolean'       | `false` | Optional, styles the density of the list, making it appear more compact.                                                                     |
| `avatar`          | boolean'       | `false` | Optional, configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. |
| `singleSelection` | boolean'       | `false` | Applicable only for the `<ui-list>`. The list can handle selecting/deselecting list elements based on click or keyboard action.              |

#### Slots

| Name      | Slots                                          | Description                                                                                          |
| --------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `default` | `{ itemClass, selectedClass, activatedClass }` | Applicable only for the `<ui-nav>`. The default slot holds the item components and can contain HTML. |

```html
<ui-nav>
  <template #default="{ itemClass, activatedClass }">
    <a :class="[itemClass, activatedClass]">activated item</a>
    <a :class="itemClass">unactivated item</a>
  </template>
</ui-nav>
```

> Optional, styles the row in a selected or activated state.

#### Events

| Name     | Type                      | Description                                                             |
| -------- | ------------------------- | ----------------------------------------------------------------------- |
| `action` | `function(index: number)` | Indicates that a list item with the specified index has been activated. |
