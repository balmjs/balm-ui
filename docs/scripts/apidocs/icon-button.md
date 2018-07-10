### Props

| Name              | Type      | Default                | Description                                   |
| ----------------- | --------- | ---------------------- | --------------------------------------------- |
| model (v-model)   | `Boolean` | `false`                | Sets the toggle state.                        |
| on                | `Object`  | `undefined`            | Icon button toggle state. (**ON** state)      |
| off               | `Object`  | `undefined`            | Icon button toggle state. (**OFF** state)     |
| iconInnerSelector | `String`  | `undefined`            | Using custom icon font selector.              |
| url               | `String`  | `'javascript:void(0)'` | The _href_ attribute of the `<ui-icon-link>`. |

> Configuring the icon button toggle states by `on` and `off` props.

```js
{
  label: "Some label", // The value to apply to the element's "aria-label" attribute.
  content: "Some content", // The text content to set on the element. Note that if an inner icon is used, the text content will be set on that element instead.
  class: "Some css class" // A CSS class to apply to the icon element. The same rules regarding inner icon elements described for content apply here as well.
}
```

### Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| (default) | The default slot holds the icon button content and can contain HTML. |

### Events

| Name   | Type                      | Description                            |
| ------ | ------------------------- | -------------------------------------- |
| click  | `Function(event: object)` | Emits when the icon button is clicked. |
| change | `Function(isOn: boolean)` | Emits when the icon toggle is toggled. |
