```html
<ui-slider></ui-slider>
```

### `<ui-slider>` Types

- `0`: `'continuous'`
- `1`: `'discrete'`

#### Props

| Name                | Type           | Default | Description                                                  |
| ------------------- | -------------- | ------- | ------------------------------------------------------------ |
| `type`              | string, number | `0`     | Mandatory. Slider types.                                     |
| `discrete`          | boolean        | `false` | Styles the slider as a discrete slider.                      |
| `displayMarker`     | boolean        | `false` | Discrete sliders support display markers on their tracks.    |
| `model` (`v-model`) | number, string | `null`  | The current value of the slider.                             |
| `min`               | number, string | `0`     | The minimum value a slider can have.                         |
| `max`               | number, string | `100`   | The maximum value a slider can have.                         |
| `step`              | number, string | `1`     | Specifies the increments at which a slider value can be set. |
| `disabled`          | boolean        | `false` | Whether or not the slider is disabled.                       |

#### Events

| Name     | Type                              | Description                                                       |
| -------- | --------------------------------- | ----------------------------------------------------------------- |
| `input`  | `function(model: number\|string)` | Emits when a user is dragging the slider or changing the value.   |
| `change` | `function(value: number\|string)` | Emits when a user stops dragging the slider or changes the value. |

> NOTE: If you are not using `v-model`, you should listen for the slider using `@input` and update the `model` prop.

```html
// Automatic
<ui-slider v-model="value"></ui-slider>

// Manual
<ui-slider
  :model="value"
  @input="$balmUI.onChange('value', $event)"
></ui-slider>
```
