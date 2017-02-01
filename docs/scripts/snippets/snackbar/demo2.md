```html
<ui-snackbar :type="1"
  :active="active"
  :message="message"
  :timeout="3000"
  :actionHandler="actionHandler"
  actionText="Undo"
  @done="hide"></ui-snackbar>
```

```js
export default {
  data() {
    return {
      active: false,
      message: 'Your message'
    };
  },
  methods: {
    show() {
      this.active = true;
    },
    hide() {
      this.active = false;
    },
    actionHandler() {
      this.active = false;
    }
  }
};
```
