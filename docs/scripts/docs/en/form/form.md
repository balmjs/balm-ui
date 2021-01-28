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

**`<ui-form>` Types**

- `0`: `'horizontal'`
- `1`: `'vertical'`

#### Props

| Name                   | Type           | Default  | Description                                                                      | Version |
| ---------------------- | -------------- | -------- | -------------------------------------------------------------------------------- | ------- |
| `type`                 | string, number | `0`      | Mandatory. Form types.                                                           |         |
| `itemMarginBottom`     | number         | `0`      | Sets the form items margin bottom.                                               | 8.0.0   |
| `nowrap`               | boolean        | `false`  | Force the `<label>` text to stay on a single line and ellipse the overflow text. |         |
| `labelTopAligned`      | boolean        | `false`  | Styles the form item with a top vertical-aligned label.                          |         |
| `labelRightAligned`    | boolean        | `false`  | Styles the form item with a right text-aligned label.                            |         |
| `labelTopRightAligned` | boolean        | `false`  | Styles the form item with a top vertical-aligned and right text-aligned label.   | 8.18.0  |
| `labelWidth`           | number         | `0`      | Sets the horizontal form items' label width.                                     | 8.0.0   |
| `labelMarginRight`     | number         | `0`      | Sets the horizontal form items' label margin right.                              | 8.0.0   |
| `labelMarginBottom`    | number         | `0`      | Sets the vertical form items' label margin bottom.                               | 8.0.0   |
| `actionAlign`          | string         | `'left'` | Sets the form actions align. [`'left'`, `'center'`, `'right'`]                   | 8.18.0  |

> `labelTopAligned`, `labelRightAligned` and `labelTopRightAligned` are applicable only for `horizontal` type form.

#### Slots

| Name      | Props                                      | Description                                                 |
| --------- | ------------------------------------------ | ----------------------------------------------------------- |
| `default` | `itemClass`, `subitemClass`, `actionClass` | The default slot holds the form items and can contain HTML. |

> `itemClass` and `subitemClass` is new in 8.18.0
