```html
<ui-icon-toggle><!-- the toggle icon --></ui-icon-toggle>
```

#### Props

| Name     | Type               | Default | Description                      |
| -------- | ------------------ | ------- | -------------------------------- |
| model    | `Boolean`          | `false` | The icon toggle state            |
| on       | `Object`           |         | The icon toggle on state         |
| off      | `Object`           |         | The icon toggle off state        |
| tabindex | `Number`, `String` | `0`     | The tab index of the icon toggle |
| icon     | `String`           |         | Using custom icon font           |
| disabled | `Boolean`          | `false` | Applies disabled display effect  |

> Configuring the icon toggle states by `on` and `off` props

```js
{
  label: "Some label",
  content: "Some content",
  cssClass: "Some css class"
}
```

#### Slots

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| (default) | The default slot holds the toggle icon and can contain HTML. |

#### Events

| Name   | Type                      | Description                                                                |
| ------ | ------------------------- | -------------------------------------------------------------------------- |
| change | `Function(isOn: boolean)` | Returns `true` if the foundation's state is toggled on, `false` otherwise. |
