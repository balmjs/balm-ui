```html
<ui-button raised @click="showAlert">Show Alert</ui-button>
```

```js
export default {
  methods: {
    showAlert() {
      this.$alert({
        message: 'Hello BalmJS',
        state: 'success',
        stateOutlined: true
      });
    }
  }
};
```
