```html
<ui-button raised @click="$balmUI.onShow('open')">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-content>
    Dialog content
  </ui-dialog-content>
  <ui-dialog-actions>
    <ui-button @click="$balmUI.onHide('open')">Close dialog</ui-button>
  </ui-dialog-actions>
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
