```html
<ui-slider></ui-slider>
```

**`<ui-slider>` Types**

- `0`: `'continuous'`
- `1`: `'discrete'`

### Props

| Name                     | Type           | Default | Description                                                       |
| ------------------------ | -------------- | ------- | ----------------------------------------------------------------- |
| `type`                   | string, number | `0`     | Mandatory. Slider types.                                          |
| `discrete`               | boolean        | `false` | Styles the slider as a discrete slider.                           |
| `withTickMarks`          | boolean        | `false` | Discrete sliders support display markers on their tracks.         |
| `modelValue` (`v-model`) | number, array  | `0`     | The current value of the slider. (`array` value for range slider) |
| `min`                    | number         | `0`     | The minimum value a slider can have.                              |
| `max`                    | number         | `100`   | The maximum value a slider can have.                              |
| `step`                   | number         | `1`     | Specifies the increments at which a slider value can be set.      |
| `disabled`               | boolean        | `false` | Whether or not the slider is disabled.                            |

### Events

| Name                | Type                             | Description                                                       |
| ------------------- | -------------------------------- | ----------------------------------------------------------------- |
| `update:modelValue` | `function(value: number\|array)` | Emits when a user stops dragging the slider or changes the value. |

> NOTE: If you are not using `v-model`, you should listen for the slider using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-slider v-model="value"></ui-slider>
  ```

- Manual

  ```html
  <ui-slider
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-slider>
  ```
