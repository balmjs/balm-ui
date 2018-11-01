```html
<ui-image-item>
  <!-- the image supporting content (optional) -->
  <ui-image-supporting></ui-image-supporting>
</ui-image-item>
```

#### Props

| Name  | Type      | Default | Description                               |
| ----- | --------- | ------- | ----------------------------------------- |
| src   | `String`  | `null`  | The _src_ attribute of the `<img>`.       |
| alt   | `String`  | `null`  | The _alt_ attribute of the `<img>`.       |
| block | `Boolean` | `false` | Use a `<div>` instead of `<img>` element. |

#### Slots

| Name      | Description                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| (default) | Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. |
