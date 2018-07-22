```html
<ui-button raised @click="$balmUI.onShow('open')">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-body>
    Dialog content
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
  }
};
```
