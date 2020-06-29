```html
<ui-editor></ui-editor>
```

#### Props

| Name                    | Type            | Default  | Description                                                           |
| ----------------------- | --------------- | -------- | --------------------------------------------------------------------- |
| `model` (`v-model`)     | string          | `''`     | Mandatory.                                                            |
| `options`               | object          | `{}`     | See [Quill options](https://quilljs.com/docs/configuration/#options). |
| `toolbar`               | array, string   | null     | Custom or `'full'` editor toolbar .                                   |
| `placeholder`           | string          | `null`   | Placeholder text to show when editor is empty.                        |
| `theme`                 | string          | `'snow'` | Name of theme to use. (`'bubble'` or `'snow'`)                        |
| `customImageHandler`    | boolean         | `false`  | Enable custom image handler.                                          |
| `toolbarCustomHandlers` | object          | `{}`     | Custom Handlers.                                                      |
| `emotions`              | array           | `[]`     | The emoticon extension. Supports `emoji` and `image`.                 |
| `extension`             | boolean, object | `false`  | Custom extension.                                                     |

- **`toolbarCustomHandlers`**

```js
{
  toolbar: ['customButton'],
  toolbarCustomHandlers: {
    customButton: (quill, insert) => {}; // Insert content into the editor by `insert(value) => {}`
  }
}
```

- **`emotions` format:**

```js
[
  {
    type: 'image',
    title: 'Default',
    content: [
      {
        name: 'oo',
        alt: '坏笑',
        src:
          'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
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
  },
  {
    type: 'image',
    title: 'Custom',
    content: [
      {
        name: 'xx',
        alt: '舔屏',
        src:
          'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
      }
    ]
  }
];
```

- **Encode & Decode Emoji**

```html
<ui-editor ref="editor" v-model="content"></ui-editor>
```

- `this.$refs.editor.decodeEmoji(content): html`: get back-end data → set front-end view
- `this.$refs.editor.encodeEmoji(html): content`: submit front-end data → save back-end data

#### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `toolbar` |       | The toolbar slot holds the custom toolbar buttons and can contain HTML. |

#### Events

| Name          | Type                        | Description                                    |
| ------------- | --------------------------- | ---------------------------------------------- |
| `change`      | `function(content: string)` | Emits when the editor text content is changed. |
| `file-change` | `function(file, insert)`    | `customImageHandler` required.                 |

> NOTE: If you are not using `v-model`, you should listen for the editor using `@change` and update the `model` prop.

- Automatic
  ```html
  <ui-editor v-model="content"></ui-editor>
  ```
- Manual
  ```html
  <ui-editor
    :model="content"
    @change="$balmUI.onChange('content', $event)"
  ></ui-editor>
  ```

> Insert uploaded image content into the editor by `insert(url) => {}`.
