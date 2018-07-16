```html
<ui-snackbar
  v-model="active"
  :message="message"
  :actionHandler="actionHandler"
  :multiline="multiline"
  :actionOnBottom="actionOnBottom"
  :actionText="actionText"
  :dismiss="dismiss"></ui-snackbar>
```

```js
export default {
  data() {
    return {
      active: false,
      message: 'Hello Snackbar',
      multiline: false,
      actionOnBottom: false,
      actionText: 'Undo',
      dismiss: true
    };
  }
};
```
