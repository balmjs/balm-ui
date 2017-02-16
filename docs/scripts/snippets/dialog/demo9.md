```html
<ui-button primary effect raised @click.native="showDialog('showSlotActions')">slot: actions</ui-button>
```

```html
<ui-dialog
  class="custom-slot-action"
  transition
  enter-active-class="animated fadeInDown"
  leave-active-class="animated fadeOutUp"
  :show="showSlotActions"
  @on-close="closeDialog('showSlotActions')">
  <div slot="actions" class="actions">
    <ui-button primary raised effect @click.native="print123">'123'</ui-button>
    <ui-button accent raised effect @click.native="setContentText('Hello balm!')">change text</ui-button>
    <ui-button raised effect @click.native="closeDialog('showSlotActions', resetContentText)">close</ui-button>
  </div>
  <h4>Notice button area, while viewing the browser console output.</h4>
  <p v-show="contentText">{{contentText}}</p>
  <br>:use << slot="actions" >> to change structure of the button area.
</ui-dialog>
```
