### `<ui-icon-button>`

#### Props

| Name              | Type      | Default | Description                                                                  |
| ----------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| model (v-model)   | `Boolean` | `false` | Sets the toggle state.                                                       |
| on                | `Object`  | `null`  | Icon button toggle **ON** state.                                             |
| off               | `Object`  | `null`  | Icon button toggle **OFF** state.                                            |
| iconInnerSelector | `String`  | `null`  | Using custom icon font selector. (e.g., `.fa` for Font Awesome)              |
| url               | `String`  | `null`  | The _href_ attribute of the `<a>`. Applicable only for the `<ui-icon-link>`. |

> Configuring the icon button toggle states by `on` and `off` props.

```js
{
  label: "Some label", // The value to apply to the element's "aria-label" attribute.
  content: "Some content", // The text content to set on the element. Note that if an inner icon is used, the text content will be set on that element instead.
  class: "Some css class" // A CSS class to apply to the icon element. The same rules regarding inner icon elements described for content apply here as well.
}
```

#### Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| (default) | The default slot holds the icon button content and can contain HTML. |

##### Events

| Name   | Type                       | Description                            |
| ------ | -------------------------- | -------------------------------------- |
| change | `Function(model: boolean)` | Emits when the icon button is toggled. |

> NOTE: If you are not using `v-model`, you should listen for the icon button using `@change` and update the `model` prop.
