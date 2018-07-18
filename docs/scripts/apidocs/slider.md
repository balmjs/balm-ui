### `<ui-slider>`

#### Props

| Name            | Type               | Default | Description                                                  |
| --------------- | ------------------ | ------- | ------------------------------------------------------------ |
| model (v-model) | `Number`, `String` | `null`  | The current value of the slider.                             |
| min             | `Number`, `String` | `0`     | The minimum value a slider can have.                         |
| max             | `Number`, `String` | `100`   | The maximum value a slider can have.                         |
| step            | `Number`, `String` | `1`     | Specifies the increments at which a slider value can be set. |
| disabled        | `Boolean`          | `false` | Whether or not the slider is disabled.                       |
| label           | `String`           | `null`  |                                                              |
| discrete        | `Boolean`          | `false` | Styles the slider as a discrete slider.                      |
| displayMarkers  | `Boolean`          | `false` | Discrete sliders support display markers on their tracks.    |

#### Slots

| Name      | Description                                      | `slot-scope` |
| --------- | ------------------------------------------------ | ------------ |
| (default) | The default slot holds the label for the slider. |              |

#### Events

| Name   | Type                              | Description                                                       |
| ------ | --------------------------------- | ----------------------------------------------------------------- |
| input  | `Function(model: number\|string)` | Emits when a user is dragging the slider or changing the value.   |
| change | `Function(value: number\|string)` | Emits when a user stops dragging the slider or changes the value. |

> NOTE: If you are not using `v-model`, you should listen for the slider using `@input` and update the `model` prop.

```html
// Automatic
<ui-slider v-model="value"></ui-slider>

// Manual
<ui-slider :model="value" @input="balmUI.onChange('value', $event)"></ui-slider>
```
