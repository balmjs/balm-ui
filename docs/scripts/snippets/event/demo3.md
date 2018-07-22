```html
<ui-button raised @click="openDialog">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-body>
    Dialog content
  </ui-dialog-body>
  <ui-dialog-footer>
    <ui-button @click="closeDialog">Close dialog</ui-button>
  </ui-dialog-footer>
</ui-dialog>
```

```js
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    openDialog() {
      this.open = true;
    },
    closeDialog() {
      this.open = false;
    }
  }
};
```
