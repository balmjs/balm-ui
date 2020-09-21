```html
<ui-form-field>
  <ui-checkbox id="jack" v-model="checkedNames" value="Jack"></ui-checkbox>
  <label for="jack">Jack</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox id="john" v-model="checkedNames" value="John"></ui-checkbox>
  <label for="john">John</label>
</ui-form-field>
<ui-form-field>
  <ui-checkbox id="mike" v-model="checkedNames" value="Mike"></ui-checkbox>
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
