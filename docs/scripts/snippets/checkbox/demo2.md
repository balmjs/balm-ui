```html
<ui-form-field>
  <ui-checkbox
    v-model="checkedNames"
    input-id="jack"
    value="Jack"
  ></ui-checkbox>
  <label for="jack">Jack</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox
    v-model="checkedNames"
    input-id="john"
    value="John"
  ></ui-checkbox>
  <label for="john">John</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox
    v-model="checkedNames"
    input-id="mike"
    value="Mike"
  ></ui-checkbox>
  <label for="mike">Mike</label>
</ui-form-field>
```

```js
export default {
  data() {
    return {
      checkedNames: []
    };
  }
};
```
