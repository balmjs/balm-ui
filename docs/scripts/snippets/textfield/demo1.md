```html
<section :dir="controls.rtl ? 'rtl' : null">
  <ui-textfield
    id="full-func-text-field"
    v-model="value"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helptextId="my-text-field-helper-text"
  >
    Email Address
  </ui-textfield>
  <ui-textfield-helper
    v-if="controls.helperText"
    id="my-text-field-helper-text"
    :visible="controls.isVisible"
    :validMsg="controls.isValidMsg"
  >
    Helper Text (possibly validation message)
  </ui-textfield-helper>
</section>
```

```js
export default {
  data() {
    return {
      value: '',
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false
      }
    };
  }
};
```
