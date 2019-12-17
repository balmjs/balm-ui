```html
<ui-snackbar
  v-model="open"
  :timeoutMs="timeout"
  :message="message"
  :actionButtonText="actionText"
  :actionType="actionType ? 1 : 0"
></ui-snackbar>
```

```js
export default {
  data() {
    return {
      open: false,
      timeout: 5000,
      message: 'Hello Snackbar',
      actionText: 'close',
      actionType: false
    };
  }
};
```
