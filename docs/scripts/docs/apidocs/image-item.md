```html
<ui-image-item><!-- image and text --></ui-image-item>
```

#### Props

| Name      | Type   | Default | Description                                                             |
| --------- | ------ | ------- | ----------------------------------------------------------------------- |
| `image`   | string | `null`  | Add the _src_ attribute directly to the `<img>` in the image container. |
| `bgImage` | string | `null`  | Use a `<div>` instead of `<img>` element.                               |

#### Slots

| Name      | Slots | Description                                                                                                                 |
| --------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| `default` |       | Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. |
| `image`   |       | Optional. The image container displays an image list item’s image or illustration.                                          |

#### Events

| Name    | Type                      | Description                     |
| ------- | ------------------------- | ------------------------------- |
| `click` | `function(event: object)` | Emits when the item is clicked. |
