```html
<ui-file></ui-file>
```

#### Props

| Name     | Type      | Default    | Description                                                                |
| -------- | --------- | ---------- | -------------------------------------------------------------------------- |
| accept   | `String`  | `''`       | File types that can be accepted.                                           |
| multiple | `Boolean` | `false`    |                                                                            |
| preview  | `Boolean` | `false`    |                                                                            |
| outlined | `Boolean` | `false`    | Optional. Styles an outlined upload button that is flush with the surface. |
| text     | `String`  | `'Upload'` | Text for the default upload button.                                        |

#### Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| (default) | The default slot holds the file button content and can contain HTML. |

#### Events

| Name   | Type                     | Description                     |
| ------ | ------------------------ | ------------------------------- |
| change | `Function(files: array)` | Emits when the file is changed. |
