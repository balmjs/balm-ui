```html
<ui-switch :model="open" @change="onChange">{{ open ? 'On' : 'Off' }}</ui-switch>
```

```js
export default {
  data() {
    return {
      open: true
    };
  },
  methods: {
    onChange(val) {
      this.open = val;
    }
  }
}
```
