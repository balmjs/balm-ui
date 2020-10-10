```html
<ui-button raised @click="open = true">Show Snackbar</ui-button>

<ui-snackbar
  v-model="open"
  :timeout-ms="timeout"
  :message="message"
  :action-button-text="actionText"
  :action-type="actionType ? 1 : 0"
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
