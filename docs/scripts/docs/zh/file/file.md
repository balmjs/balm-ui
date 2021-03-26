```html
<ui-file></ui-file>
```

### Props

| Name       | Type    | Default    | Description                                           |
| ---------- | ------- | ---------- | ----------------------------------------------------- |
| `inputId`  | string  | `null`     | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性 |
| `accept`   | string  | `''`       | 可以接受的文件类型                                    |
| `multiple` | boolean | `false`    | 支持多文件上传                                        |
| `disabled` | boolean | `false`    | 禁用状态                                              |
| `outlined` | boolean | `false`    | 上传按钮显示为轮廓按钮样式                            |
| `text`     | string  | `'Upload'` | 上传按钮的文本                                        |
| `preview`  | boolean | `false`    | 启用可预览模式                                        |

### Slots

| Name      | Props | Description                     |
| --------- | ----- | ------------------------------- |
| `default` |       | default 插槽包含上传按钮及 HTML |

### Events

| Name     | Type                     | Description    |
| -------- | ------------------------ | -------------- |
| `change` | `function(files: array)` | 文件变化时触发 |

- `files` 中每个 `file` 的属性

| Name           | Type   | Description                                                                                         |
| -------------- | ------ | --------------------------------------------------------------------------------------------------- |
| `tmpId`        | string | 临时唯一 ID                                                                                         |
| `lastModified` | number | 返回文件的上次修改时间，以 UNIX 纪元以来的毫秒数为单位 (January 1st, 1970 at Midnight)              |
| `name`         | string | 返回 File 对象引用的文件的名称                                                                      |
| `size`         | number | 返回文件的大小（以字节为单位）                                                                      |
| `type`         | string | 返回文件的 [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 类型 |
| `sourceFile`   | file   | 返回一个新的 Blob 对象，其中包含源 Blob 的指定字节范围内的数据                                      |
| `previewSrc`   | string | 用于预览的 `src` 数据。 仅适用于可预览模式                                                          |
| `previewError` | number | 预览错误代码：`{0: 'OK', 1: 'Not image type', 2: 'Unsupported'}`                                    |
