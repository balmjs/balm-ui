```html
<ui-form-field>
  <ui-radio id="male" name="sex" value="M" v-model="gender"></ui-radio>
  <label for="male">Male</label>
</ui-form-field>
<ui-form-field>
  <ui-radio id="female" name="sex" value="F" v-model="gender"></ui-radio>
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
