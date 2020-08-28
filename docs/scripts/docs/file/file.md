```html
<ui-file></ui-file>
```

### Props

| Name       | Type    | Default    | Description                                                                |
| ---------- | ------- | ---------- | -------------------------------------------------------------------------- |
| `accept`   | string  | `''`       | File types that can be accepted.                                           |
| `multiple` | boolean | `false`    | Whether to support selected multiple file.                                 |
| `disabled` | boolean | `false`    | To disable a upload button.                                                |
| `outlined` | boolean | `false`    | Optional. Styles an outlined upload button that is flush with the surface. |
| `text`     | string  | `'Upload'` | Text for the default upload button.                                        |
| `preview`  | boolean | `false`    | Optional. Enabled preview file data.                                       |

### Slots

| Name      | Props | Description                                                          |
| --------- | ----- | -------------------------------------------------------------------- |
| `default` |       | The default slot holds the file button content and can contain HTML. |

### Events

| Name     | Type                     | Description                     |
| -------- | ------------------------ | ------------------------------- |
| `change` | `function(files: array)` | Emits when the file is changed. |

- `file` props in `files`

| Name           | Type   | Description                                                                                                       |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| `tmpId`        | string | Temporary unique ID.                                                                                              |
| `lastModified` | number | Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).  |
| `name`         | string | Returns the name of the file referenced by the File object.                                                       |
| `size`         | number | Returns the size of the file in bytes.                                                                            |
| `type`         | string | Returns the [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) type of the file. |
| `sourceFile`   | file   | Returns a new Blob object containing the data in the specified range of bytes of the source Blob.                 |
| `previewSrc`   | string | The `src` data for preview. Applicable only for `preview` status.                                                 |
| `previewError` | number | Preview error code: `{0: 'OK', 1: 'Not image type', 2: 'Unsupported'}`.                                           |
