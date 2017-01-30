```html
<ui-checkbox value="1" :model="options" @change="onChange">Option A</ui-checkbox>
<ui-checkbox value="2" :model="options" @change="onChange">Option B</ui-checkbox>
<ui-checkbox value="3" :model="options" @change="onChange">Option C</ui-checkbox>
```

```js
export default {
  data() {
    return {
      options: []
    };
  },
  methods: {
    onChange(val) {
      this.options = val;
    }
  }
};
```
