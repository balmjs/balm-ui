```html
<ui-editor></ui-editor>
```

#### Props

| Name                    | Type          | Default  | Description                                                           |
| ----------------------- | ------------- | -------- | --------------------------------------------------------------------- |
| `content` (`v-model`)   | string        | `''`     | Mandatory.                                                            |
| `options`               | object        | `{}`     | See [Quill options](https://quilljs.com/docs/configuration/#options). |
| `toolbar`               | array, string | null     | Custom or `'full'` editor toolbar .                                   |
| `placeholder`           | string        | `''`     | Placeholder text to show when editor is empty.                        |
| `theme`                 | string        | `'snow'` | Name of theme to use. (`'bubble'` or `'snow'`)                        |
| `customImageHandler`    | boolean       | `false`  | Enable custom image handler.                                          |
| `toolbarCustomHandlers` | object        | `null`   | Custom Handlers.                                                      |
| `emotions`              | array         | `[]`     | The emoticon extension.                                               |
| `extension`             | object        | `null`   | Custom extension.                                                     |

- **`toolbarCustomHandlers`**

```js
{
  toolbar: ['customButton'],
  toolbarCustomHandlers: {
    customButton: (quill, callback) => {};
  }
}
```

- **`emotions` format:**

```js
[
  {
    type: 'image',
    title: 'default',
    content: [
      {
        name: 'oo',
        alt: '坏笑',
        src:
          'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
      },
      {
        name: 'xx',
        alt: '舔屏',
        src:
          'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
      }
    ]
  },
  {
    type: 'emoji',
    title: 'emoji',
    content: [
      {
        name: 'smile',
        value: '😀'
      },
      {
        name: 'cry',
        value: '😆'
      }
    ]
  }
];
```

#### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `toolbar` |       | The toolbar slot holds the custom toolbar buttons and can contain HTML. |

#### Events

| Name          | Type                        | Description                                    |
| ------------- | --------------------------- | ---------------------------------------------- |
| `change`      | `function(content: string)` | Emits when the editor text content is changed. |
| `file-change` | `function(file, insert)`    | `customImageHandler` required.                 |

> NOTE: If you are not using `v-model`, you should listen for the editor using `@change` and update the `content` prop.

- Automatic
  ```html
  <ui-editor v-model="content"></ui-editor>
  ```
- Manual
  ```html
  <ui-editor
    :content="content"
    @change="$balmUI.onChange('content', $event)"
  ></ui-editor>
  ```

> Insert uploaded image content into the editor by `insert(url) => {}`.
