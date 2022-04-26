```html
<ui-button raised @click="open = true">Show floating sheet dialog</ui-button>

<ui-dialog v-model="open" sheet no-content-padding>
  <ui-dialog-content>
    <div class="test-sheet__content">
      <h3>Sheets</h3>
      <p>
        There are no action buttons. Any HTML content can go here. Title is also
        defined through content.
      </p>
    </div>
  </ui-dialog-content>
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
