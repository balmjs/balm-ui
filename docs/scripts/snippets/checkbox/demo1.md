```html
<ui-form-field>
  <ui-checkbox v-model="checked" input-id="checkbox"></ui-checkbox>
  <label for="checkbox">{{checked}}</label>
</ui-form-field>
```

```js
export default {
  data() {
    return {
      checked: false
    };
  }
};
```
