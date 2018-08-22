```html
<ui-file></ui-file>
```

#### Props

| Name     | Type      | Default    | Description                                                                |
| -------- | --------- | ---------- | -------------------------------------------------------------------------- |
| accept   | `String`  | `''`       | File types that can be accepted.                                           |
| multiple | `Boolean` | `false`    | Whether to support selected multiple file.                                 |
| preview  | `Boolean` | `false`    | Optional. Enabled preview file data.                                       |
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

- `file` props in `files`

| Name         | Type     | Description                                                                                                       |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| uuid         | `String` | UUID.                                                                                                             |
| lastModified | `Number` | Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).  |
| name         | `String` | Returns the name of the file referenced by the File object.                                                       |
| size         | `Number` | Returns the size of the file in bytes.                                                                            |
| type         | `String` | Returns the [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) type of the file. |
| sourceFile   | `File`   | Returns a new Blob object containing the data in the specified range of bytes of the source Blob.                 |
| previewSrc   | `String` | The `src` data for preview. Applicable only for `preview` status.                                                 |
| previewError | `Number` | Preview error code: `{0: 'OK', 1: 'Not image type', 2: 'Unsupported'}`.                                           |
