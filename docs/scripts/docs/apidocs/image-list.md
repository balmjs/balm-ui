```html
<ui-image-list><!-- the image item components --></ui-image-list>
```

#### Props

| Name             | Type           | Default | Description                                                                                                                                            |
| ---------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`           | string, number | `0`     | Mandatory. Image list types.                                                                                                                           |
| `masonry`        | boolean        | `false` | Optional. Indicates that this Image List should use the Masonry variant.                                                                               |
| `textProtection` | boolean        | `false` | Optional. Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image). |

- **Types:** `0: 'standard'`, `1: 'masonry'`

#### Slots

| Name      | Slots | Description                                       |
| --------- | ----- | ------------------------------------------------- |
| `default` |       | The default slot holds the image item components. |
