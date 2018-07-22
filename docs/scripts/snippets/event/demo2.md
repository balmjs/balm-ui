```html
<label>Vue methods</label>
<ui-button raised @click="openDialog">Open dialog</ui-button>

<label>$balmUI</label>
<ui-button raised @click="$balmUI.onShow('open')">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-header>
    Dialog content
  </ui-dialog-header>
  <ui-dialog-body>
    <p> Open dialog: `$balmUI.onShow('open')`</p>
    <p>Close dialog: `$balmUI.onHide('open')`</p>
  </ui-dialog-body>
  <ui-dialog-footer>
    <ui-button @click="$balmUI.onHide('open')">Close dialog</ui-button>
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
