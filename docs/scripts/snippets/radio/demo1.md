```html
<ui-form-field>
  <ui-radio v-model="gender" input-id="male" value="M"></ui-radio>
  <label for="male">Male</label>
</ui-form-field>
<ui-form-field>
  <ui-radio v-model="gender" input-id="female" value="F"></ui-radio>
  <label for="female">Female</label>
</ui-form-field>
```

```js
export default {
  data() {
    return {
      gender: ''
    };
  }
};
```
