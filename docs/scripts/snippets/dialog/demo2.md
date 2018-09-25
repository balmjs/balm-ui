```html
<ui-button raised @click="$balmUI.onShow('open')">Show Scrolling Dialog</ui-button>

<ui-dialog scrollable
  v-model="open"
  @confirm="onConfirm">
  <ui-dialog-header>Choose a Ringtone</ui-dialog-header>
  <ui-dialog-body>
    <ui-list>
      <ui-item v-for="(item, index) in list" :key="index">
        {{ item }}
      </ui-item>
    </ui-list>
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
