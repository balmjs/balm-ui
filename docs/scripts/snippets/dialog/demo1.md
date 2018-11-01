```html
<ui-button raised @click="$balmUI.onOpen('open')">Show Dialog</ui-button>

<ui-dialog
  v-model="open"
  @confirm="onConfirm">
  <ui-dialog-title>Use Google's location service?</ui-dialog-title>
  <ui-dialog-content>
    <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
  </ui-dialog-content>
  <ui-dialog-actions></ui-dialog-actions>
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
