```html
<ui-form-field>
  <ui-checkbox id="jack" value="Jack" v-model="checkedNames"></ui-checkbox>
  <label for="jack">Jack</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox id="john" value="John" v-model="checkedNames"></ui-checkbox>
  <label for="john">John</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox id="mike" value="Mike" v-model="checkedNames"></ui-checkbox>
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
