```html
<ui-editor></ui-editor>
```

### Props

| Name                 | Type            | Default                                 | Description                                                           |
| -------------------- | --------------- | --------------------------------------- | --------------------------------------------------------------------- |
| `model` (`v-model`)  | string          | `''`                                    | Mandatory.                                                            |
| `options`            | object          | `{}`                                    | See [Quill options](https://quilljs.com/docs/configuration/#options). |
| `toolbar`            | array, string   | null                                    | Custom or `'full'` editor toolbar.                                    |
| `placeholder`        | string          | `null`                                  | Placeholder text to show when editor is empty.                        |
| `readonly`           | boolean         | `false`                                 | Whether to instantiate the editor to read-only mode.                  |
| `theme`              | string          | `'snow'`                                | Name of theme to use. (`'bubble'` or `'snow'`)                        |
| `toolbarIcons`       | object          | `{}`                                    | Custom toolbar icons.                                                 |
| `toolbarOptions`     | object          | `{ font: [], size: [], lineheight:[] }` | Custom toolbar options of the Font Famliy, Font Size and Line Height. |
| `toolbarHandlers`    | object          | `{}`                                    | Custom toolbar handlers.                                              |
| `customImageHandler` | boolean         | `false`                                 | Enable custom image handler.                                          |
| `emotions`           | array           | `[]`                                    | The emoticon extension. Supports `emoji` and `image`.                 |
| `withCounter`        | boolean         | `false`                                 | Styles the editor with an internal character counter.                 |
| `extension`          | `false`, object | `false`                                 | Custom extension for Quill.                                           |

> `toolbarIcons`, `toolbarOptions`, `withCounter`: New in 8.6.0

#### `toolbar` prop

- Defaults:
  - `align`/`direction`/`indent`
  - `background`/`color`/`font`/`size`
  - `blockquote`/`code-block`/`header`/`list`
  - `bold`/`italic`/`link`/`script`/`strike`/`underline`
  - `image`/`video`
- Extensions:
  - `font`/`size`/`lineheight`: custom Font Famliy, Font Size and Line Height
  - `image`: custom image upload handler
  - `emoji`: emoji module
  - `divider`: horizontal rule
  - `textindent`: like `indent`, but for inline
  - `linkoff`: remove all links in editor
  - `counter`: character counter module
  - `undo`/`redo`: built-in undo/redo handling
  - `selectall`: select all content in editor

#### `toolbarOptions` & `emotions` format for global

- `/path/to/app/scripts/config/editor.js`

  ```js
  const toolbarOptions = {
    font: [
      'Arial',
      'Arial Black',
      'Comic Sans MS',
      'Courier New',
      'Tahoma',
      'Georgia',
      'Helvetica',
      'Segoe UI',
      'Impact',
      'Times New Roman',
      'Verdana'
    ],
    size: [
      '8px',
      '9px',
      '10px',
      '11px',
      '12px',
      '13px',
      '14px',
      '16px',
      '18px',
      '24px',
      '36px',
      '48px',
      '60px',
      '72px',
      '96px'
    ],
    lineheight: [
      '1',
      '1.2',
      '1.5',
      '1.6',
      '1.8',
      '2',
      '2.4',
      '2.8',
      '3',
      '4',
      '5'
    ]
  };

  const emotions = [
    {
      type: 'image',
      title: 'Default',
      content: [
        {
          name: 'oo',
          alt: '坏笑',
          src: 'https://material.balmjs.com/images/emoji/p_huaixiao.png'
        },
        {
          name: 'xx',
          alt: '舔屏',
          src: 'https://material.balmjs.com/images/emoji/p_tian.png'
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
          name: 'yy',
          alt: '神兽',
          src: 'https://material.balmjs.com/images/emoji/g_shenshou.gif'
        },
        {
          name: 'zz',
          alt: '浮云',
          src: 'https://material.balmjs.com/images/emoji/g_fuyun.gif'
        }
      ]
    }
  ];

  export { toolbarOptions, emotions };
  ```

- `/path/to/app/scripts/main.js`

  ```js
  import Vue from 'vue';
  import { toolbarOptions, emotions } from '@/config/editor';
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

  Vue.use(BalmUIPlus, {
    UiEditor: {
      toolbarOptions,
      emotions
    }
  });
  ```

#### `toolbarHandlers` prop

```js
{
  toolbar: ['customFormat'],
  toolbarHandlers: {
    customFormat: (quill, value) => {}; // Insert content into the editor by `quill.insert(customFormat, value) => {}`
  }
}
```

#### Encode & Decode Emoji

```html
<ui-editor ref="editor" v-model="content"></ui-editor>
```

- `this.$refs.editor.decodeEmoji(content): html`: get back-end data → set front-end view
- `this.$refs.editor.encodeEmoji(html): content`: submit front-end data → save back-end data

### Slots

| Name      | Props | Description                                                            |
| --------- | ----- | ---------------------------------------------------------------------- |
| `toolbar` |       | The toolbar slot holds the custom format buttons and can contain HTML. |

### Events

| Name          | Type                        | Description                                                                                              |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `change`      | `function(content: string)` | Emits when the editor text content is changed.                                                           |
| `file-change` | `function(file, insert)`    | `customImageHandler` required. (Insert uploaded image content into the editor by `insert(url)` function) |

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
