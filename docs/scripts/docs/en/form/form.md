```html
<ui-form>
  <template #default="{ actionClass }">
    <ui-form-field>
      <label></label>
      <!-- awesome form item 1 -->
    </ui-form-field>
    <ui-form-field>
      <label></label>
      <!-- awesome form item 2 -->
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

| Name                | Type           | Default | Description                                                                      |
| ------------------- | -------------- | ------- | -------------------------------------------------------------------------------- |
| `type`              | string, number | `0`     | Mandatory. Text divider types.                                                   |
| `nowrap`            | boolean        | `false` | Force the `<label>` text to stay on a single line and ellipse the overflow text. |
| `labelTopAligned`   | boolean        | `false` | Styles the form item with a top vertical-aligned label.                          |
| `labelRightAligned` | boolean        | `false` | Styles the form item with a right text-aligned label.                            |

> `labelTopAligned` and `labelRightAligned` are applicable only for `horizontal` type form.

#### Slots

| Name      | Props         | Description                                                 |
| --------- | ------------- | ----------------------------------------------------------- |
| `default` | `actionClass` | The default slot holds the form items and can contain HTML. |
