```html
<ui-button><!-- the button text label --></ui-button>
<ui-a><!-- the anchor text label --></ui-a>
```

#### Props

| Name         | Type    | Default | Description                                                               |
| ------------ | ------- | ------- | ------------------------------------------------------------------------- |
| `raised`     | boolean | `false` | Optional. Styles a contained button that is elevated above the surface.   |
| `unelevated` | boolean | `false` | Optional. Styles a contained button that is flush with the surface.       |
| `outlined`   | boolean | `false` | Optional. Styles an outlined button that is flush with the surface.       |
| `dense`      | boolean | `false` | Optional. Makes the button text and container slightly smaller.           |
| `icon`       | string  | `''`    | Optional. Indicates an icon element. See [Material Icons](/#/icons) list. |
| `disabled`   | boolean | `false` | To disable a button.                                                      |
| `cssOnly`    | boolean | `false` | Ripple effect is disabled.                                                |
| `url`        | string  | `null`  | The _href_ attribute of the `<a>`. Applicable only for the `<ui-a>`.      |

#### Slots

| Name      | Slots           | Description                                                          |
| --------- | --------------- | -------------------------------------------------------------------- |
| `default` |                 | The default slot holds the button or link text and can contain HTML. |
| `before`  | `{ iconClass }` | Custom leading icon                                                  |
| `after`   | `{ iconClass }` | Custom trailing icon                                                 |

```html
<template #before="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

#### Events

| Name    | Type                      | Description                       |
| ------- | ------------------------- | --------------------------------- |
| `click` | `function(event: object)` | Emits when the button is clicked. |

#### Sass Variables

- Size
  - `$mdc-button-height`: `36px`
  - `$mdc-button-horizontal-padding`: `8px`
  - `$mdc-button-contained-horizontal-padding`: `16px`
  - `$mdc-dense-button-height`: `32px`
- Color
  - `$mdc-button-disabled-ink-color`
