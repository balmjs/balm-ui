```html
<ui-button raised @click="openDialog">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-content>
    Dialog content
  </ui-dialog-content>
  <ui-dialog-actions>
    <ui-button @click="closeDialog">Close dialog</ui-button>
  </ui-dialog-actions>
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
