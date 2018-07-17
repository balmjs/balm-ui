```html
<ui-button raised @click="balmUI.onOpen('open')">Show Dialog</ui-button>

<ui-dialog
  v-model="open"
  @confirm="onConfirm">
  <ui-dialog-header>Use Google's location service?</ui-dialog-header>
  <ui-dialog-body>
    <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
  </ui-dialog-body>
  <ui-dialog-footer></ui-dialog-footer>
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
    onConfirm(result) {
      if (result) {
        console.log('ok');
      } else {
        console.log('cancel');
      }
    }
  }
};
```
