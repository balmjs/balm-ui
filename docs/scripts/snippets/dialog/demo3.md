```html
<ui-button raised @click="open = true">Show full-screen dialog</ui-button>

<ui-dialog v-model="open" fullscreen>
  <ui-dialog-title>Full-Screen Dialog Title</ui-dialog-title>
  <ui-dialog-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
    metus dapibus, maximus massa pulvinar, commodo nunc. Quisque vitae luctus
    lectus, ut tempus ipsum. Sed suscipit gravida scelerisque. Aenean vulputate
    elementum est, quis consectetur orci consectetur ac. Quisque accumsan vel
    nisi id dapibus. Suspendisse nec urna eu massa ornare rutrum. Vivamus at
    nisi sit amet nulla pretium volutpat sit amet in justo. Donec mi metus,
    interdum ac tincidunt at, vehicula vitae nisl. Morbi fermentum dapibus
    massa, nec lobortis massa vestibulum eu.
  </ui-dialog-content>
  <ui-dialog-actions>
    <ui-button @click="open = false">OK</ui-button>
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
