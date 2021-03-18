```html
<ui-segmented-buttons :items="buttonGroupItems"></ui-segmented-buttons>
```

```html
<ui-segmented-buttons>
  <ui-segmented-button></ui-segmented-button>
</ui-segmented-buttons>
```

### Props

| Name                | Type          | Default | Description                                 |
| ------------------- | ------------- | ------- | ------------------------------------------- |
| `model` (`v-model`) | array, number | `[]`    | Mandatory.                                  |
| `items`             | array         | `[]`    | Segmented button items.                     |
| `singleSelect`      | boolean       | `false` | To make the segmented button single select. |

- The keys of a segmented button item object:

  ```js
  {
    text: 'text', // label text
    icon: 'icon', // label icon
  }
  ```

### Slots

| Name      | Props | Description                                  |
| --------- | ----- | -------------------------------------------- |
| `default` |       | The default slot holds the segmented button. |

### Events

| Name       | Type                               | Description                                  |
| ---------- | ---------------------------------- | -------------------------------------------- |
| `change`   | `function(model: array \| number)` | Emits when the segmented buttons is changed. |
| `selected` | `function(index: number)`          | Emits when the segmented button is clicked.  |

> NOTE: If you are not using `v-model`, you should listen for the segmented buttons using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-segmented-buttons v-model="value"></ui-segmented-buttons>
  ```

- Manual

  ```html
  <ui-segmented-buttons
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-segmented-buttons>
  ```
