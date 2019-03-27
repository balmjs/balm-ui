```html
<ui-image-item>
  <!-- the image supporting content (optional) -->
  <ui-image-supporting></ui-image-supporting>
</ui-image-item>
```

#### Props

| Name    | Type    | Default | Description                               |
| ------- | ------- | ------- | ----------------------------------------- |
| `src`   | string  | `null`  | The _src_ attribute of the `<img>`.       |
| `alt`   | string  | `null`  | The _alt_ attribute of the `<img>`.       |
| `block` | boolean | `false` | Use a `<div>` instead of `<img>` element. |

#### Slots

| Name      | Slots | Description                                                                                                                 |
| --------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| `default` |       | Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. |
