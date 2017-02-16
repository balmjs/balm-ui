```html
<ui-button primary effect raised @click.native="showDialog('showTransparent')">dialog with transparent mask</ui-button>
```
```html
<ui-dialog :show="showTransparent"  @on-close="closeDialog('showTransparent')" transparent>
  <h4>I'm a dialog width a transparent mask.</h4>
  <br>:use { transparent } prop.
</ui-dialog>
```
