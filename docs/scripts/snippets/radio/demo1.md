```html
<ui-form-field>
  <ui-radio id="male" v-model="gender" name="sex" value="M"></ui-radio>
  <label for="male">Male</label>
</ui-form-field>
<ui-form-field>
  <ui-radio id="female" v-model="gender" name="sex" value="F"></ui-radio>
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
