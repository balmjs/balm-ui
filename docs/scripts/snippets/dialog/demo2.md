```html
<ui-button raised @click="open = true">Show Scrolling Dialog</ui-button>

<ui-dialog v-model="open" scrollable @confirm="onConfirm">
  <ui-dialog-title>Choose a Ringtone</ui-dialog-title>
  <ui-dialog-content>
    <ui-list>
      <ui-item v-for="(item, index) in list" :key="index">{{ item }}</ui-item>
    </ui-list>
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
