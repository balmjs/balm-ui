```html
<ui-form-field>
  <ui-checkbox id="checkbox" v-model="checked"></ui-checkbox>
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
