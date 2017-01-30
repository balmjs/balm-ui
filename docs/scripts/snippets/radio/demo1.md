```html
<ui-radio name="sex" value="M" :model="gender" @change="onChange">Male</ui-radio>
<ui-radio name="sex" value="F" :model="gender" @change="onChange">Female</ui-radio>
```

```js
export default {
  data() {
    return {
      gender: ''
    };
  },
  methods: {
    onChange(val) {
      this.gender = val;
    }
  }
};
```
