```html
<ui-editor></ui-editor>
```

### Props

| Name                 | Type            | Default                                 | Description                                                           | Version |
| -------------------- | --------------- | --------------------------------------- | --------------------------------------------------------------------- | ------- |
| `model` (`v-model`)  | string          | `''`                                    | 富文本值                                                              |         |
| `options`            | object          | `{}`                                    | 详见 [Quill options](https://quilljs.com/docs/configuration/#options) |         |
| `toolbar`            | array, string   | null                                    | 富文本工具栏配置（自定义或 `'full'`)                                  |         |
| `placeholder`        | string          | `null`                                  | 当编辑器为空时显示的占位符文本                                        |         |
| `readonly`           | boolean         | `false`                                 | 只读模式                                                              |         |
| `theme`              | string          | `'snow'`                                | 主题样式                                                              |         |
| `toolbarIcons`       | object          | `{}`                                    | 自定义工具栏图标                                                      | 8.6.0   |
| `toolbarTips`        | object          | `{}`                                    | 自定义工具栏图标提示文本                                              | 8.8.0   |
| `toolbarOptions`     | object          | `{ font: [], size: [], lineheight:[] }` | 自定义工具栏的字体，文字大小和行高                                    | 8.6.0   |
| `toolbarHandlers`    | object          | `{}`                                    | 自定义工具栏事件处理                                                  |         |
| `customImageHandler` | boolean         | `false`                                 | 启用自定义图片事件处理                                                |         |
| `emotions`           | array           | `[]`                                    | 表情扩展。支持 `emoji` 和 `image`                                     |         |
| `withCounter`        | boolean         | `false`                                 | 启用内部计数器                                                        | 8.6.0   |
| `extension`          | `false`, object | `false`                                 | 自定义 Quill 扩展                                                     |         |

```ts
interface Editor {
  theme: 'bubble' | 'snow';
}
```

#### `toolbar` 属性

- 官方默认工具
  - `align`/`direction`/`indent`
  - `background`/`color`/`font`/`size`
  - `blockquote`/`code-block`/`header`/`list`
  - `bold`/`italic`/`link`/`script`/`strike`/`underline`
  - `image`/`video`
- BalmUI 扩展工具
  - `font`/`size`/`lineheight`: 自定义字体，文字大小和行高
  - `image`: 自定义图片上传处理
  - `emoji`: 表情模块
  - `divider`: 水平分割线
  - `textindent`: 内联的文本缩进（类似 `indent`）
  - `linkoff`: 清除所有链接
  - `counter`: 计数器模块
  - `undo`/`redo`: 内置的撤销和重做处理
  - `selectall`: 选中全部内容

#### `toolbarOptions` 和 `emotions` 全局配置

- `/path/to/app/scripts/config/editor.js`

  ```js
  const toolbarTips = {
    header: 'Headline',
    font: 'Font Famliy',
    size: 'Font Size',
    lineheight: 'Line Height',
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    color: 'Text Color',
    background: 'Background Color',
    align: {
      default: 'Left Align',
      center: 'Center Align',
      right: 'Right Align',
      justify: 'Justify Align'
    },
    list: {
      ordered: 'Ordered List',
      bullet: 'Bullet List'
    },
    indent: {
      '+1': 'Increase Indent',
      '-1': 'Decrease Indent'
    },
    blockquote: 'Blockquote',
    emoji: 'Emoji'
  };

  const toolbarOptions = {
    // 自定义 Font Family 需对应配置 Sass 变量 `$font-family`
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

  export { toolbarTips, toolbarOptions, emotions };
  ```

- `/path/to/app/scripts/main.js`

  ```js
  import Vue from 'vue';
  import { toolbarTips, toolbarOptions, emotions } from '@/config/editor';
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

  Vue.use(BalmUIPlus, {
    UiEditor: {
      toolbarTips,
      toolbarOptions,
      emotions
    }
  });
  ```

#### `toolbarHandlers` 属性

```js
{
  toolbar: ['customFormat'],
  toolbarHandlers: {
    customFormat: (quill, value) => {};
  }
}
```

- `quill.insert(customFormat, value) => {}`: 向富文本插入内容
- `quill.insert('html', content)`: 向富文本 HTML (New in 8.9.0)

#### Encode & Decode Emoji

```html
<ui-editor ref="editor" v-model="content"></ui-editor>
```

- `this.$refs.editor.decodeEmoji(content)`: 获取服务端数据 → 设置客户端展示
- `this.$refs.editor.encodeEmoji(html)`: 提交客户端数据 → 保存服务端数据

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `toolbar` |       | toolbar 插槽包含自定义工具按钮及 HTML |

### Events

| Name          | Type                        | Description                                                                  |
| ------------- | --------------------------- | ---------------------------------------------------------------------------- |
| `change`      | `function(content: string)` | 富文本值变化时触发                                                           |
| `file-change` | `function(file, insert)`    | 需要配置 `customImageHandler`（通过 `insert(url)` 方法向富文本插入上传图片） |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听富文本值并更新 `model` 属性

- 自动

  ```html
  <ui-editor v-model="content"></ui-editor>
  ```

- 手动

  ```html
  <ui-editor
    :model="content"
    @change="$balmUI.onChange('content', $event)"
  ></ui-editor>
  ```
