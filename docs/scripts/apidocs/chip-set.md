```html
<ui-chip-set><!-- the chip components --></ui-chip-set>
```

#### Props

| Name            | Type              | Default | Description                                                                                                           |
| --------------- | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| model (v-model) | `Number`, `Array` | `-1`    | Mandatory. Single or multiple selection from a set of options.                                                        |
| input           | `Boolean`         | `false` | Optional. Indicates that the chips in the set are input chips, which enable user input by converting text into chips. |
| options         | `Array`           | `[]`    | A set of options. Applicable only for updating the input chips.                                                       |
| choice          | `Boolean`         | `false` | Optional. Indicates that the chips in the set are choice chips, which allow a single selection from a set of options. |
| filter          | `Boolean`         | `false` | Optional. Indicates that the chips in the set are filter chips, which allow multiple selection from a set of options. |

#### Slots

| Name      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| (default) | The default slot holds the chip components and can contain HTML. |

#### Events

| Name   | Type                             | Description                      |
| ------ | -------------------------------- | -------------------------------- |
| change | `Function(model: number\|array)` | Emits when the chips is changed. |

> NOTE: If you are not using `v-model`, you should listen for the chips using `@change` and update the `model` prop.

```html
// Automatic
<ui-chip-set v-model="selected"></ui-chip-set>

// Manual
<ui-chip-set :model="selected" @change="$balmUI.onChange('selected', $event)"></ui-chip-set>
```
