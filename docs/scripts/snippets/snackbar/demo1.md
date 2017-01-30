```html
<ui-snackbar :active="active" :message="message" @done="hide"></ui-snackbar>
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
    }
  }
};
```
