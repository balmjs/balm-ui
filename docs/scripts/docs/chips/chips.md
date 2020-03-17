```html
<ui-chips><!-- the chip components --></ui-chips>
```

### `<ui-chips>` Types

- `0`: `'action'`
- `1`: `'input'`
- `2`: `'choice'`
- `3`: `'filter'`

#### Props

| Name                | Type           | Default | Description                                                     |
| ------------------- | -------------- | ------- | --------------------------------------------------------------- |
| `type`              | string, number | `0`     | Mandatory. Chips types.                                         |
| `model` (`v-model`) | number, array  | `-1`    | Mandatory. Single or multiple selection from a set of options.  |
| `options`           | array          | `[]`    | A set of options. Applicable only for updating the input chips. |

#### Slots

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the chip components and can contain HTML. |

#### Events

| Name     | Type                             | Description                      |
| -------- | -------------------------------- | -------------------------------- |
| `change` | `function(model: number\|array)` | Emits when the chips is changed. |

> NOTE: If you are not using `v-model`, you should listen for the chips using `@change` and update the `model` prop.

- Automatic
  ```html
  <ui-chips v-model="selected"></ui-chips>
  ```
- Manual
  ```html
  <ui-chips
    :model="selected"
    @change="$balmUI.onChange('selected', $event)"
  ></ui-chips>
  ```
