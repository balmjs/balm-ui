```html
<ui-form>
  <template #default="{ subitemClass, actionClass }">
    <ui-form-field>
      <label></label>
      <!-- awesome form item 1 -->
      <ui-form-field></ui-form-field>
    </ui-form-field>
    <ui-form-field>
      <label></label>
      <div :class="subitemClass">
        <!-- awesome form item 2 -->
        <ui-form-field></ui-form-field>
        <ui-form-field></ui-form-field>
      </div>
    </ui-form-field>
    <ui-form-field :class="actionClass">
      <ui-button></ui-button>
    </ui-form-field>
  </template>
</ui-form>
```

**`<ui-form>` 类型**

- `0`: `'horizontal'`
- `1`: `'vertical'`

#### Props

| Name                   | Type           | Default  | Description                                                | Version |
| ---------------------- | -------------- | -------- | ---------------------------------------------------------- | ------- |
| `type`                 | string, number | `0`      | 设置表单类型（水平或垂直模式）                             |         |
| `itemMarginBottom`     | number         | `0`      | 设置表单项下边距                                           | 8.0.0   |
| `nowrap`               | boolean        | `false`  | 固定表单项 `<label>`，超过部分的文字用省略号表示           |         |
| `labelTopAligned`      | boolean        | `false`  | 设置表单项 `<label>` 顶对齐                                |         |
| `labelRightAligned`    | boolean        | `false`  | 设置表单项 `<label>` 右对齐                                |         |
| `labelTopRightAligned` | boolean        | `false`  | 设置表单项 `<label>` 顶对齐且右对齐                        | 8.18.0  |
| `labelWidth`           | number         | `0`      | （水平模式表单）设置 `<label>` 宽度                        | 8.0.0   |
| `labelMarginRight`     | number         | `0`      | （水平模式表单）设置 `<label>` 右边距                      | 8.0.0   |
| `labelMarginBottom`    | number         | `0`      | （垂直模式表单）设置 `<label>` 下边距                      | 8.0.0   |
| `actionAlign`          | string         | `'left'` | 设置表单动作项的对齐方式 [`'left'`, `'center'`, `'right'`] | 8.18.0  |

> `labelTopAligned`，`labelRightAligned` 和 `labelTopRightAligned` 只能应用于水平模式表单。

#### Slots

| Name      | Props                                      | Description                                                 |
| --------- | ------------------------------------------ | ----------------------------------------------------------- |
| `default` | `itemClass`, `subitemClass`, `actionClass` | The default slot holds the form items and can contain HTML. |

> `itemClass` 和 `subitemClass` 是 8.18.0 新增 prop
