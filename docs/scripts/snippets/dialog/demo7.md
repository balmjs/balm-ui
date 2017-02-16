````html
<ui-button primary effect raised @click.native="showDialog('showCustomBtnText')">not default button text</ui-button>
````

````html
<ui-dialog
  cancel-text="Cancel button 2"
  confirm-text="Lovely ok button"
  :show="showCustomBtnText"
  @on-close="closeDialog('showCustomBtnText')">
  <h4>Note the button text</h4>
  <br>:use { cancel-text, confirm-text } to achieve the purpose of changing the button text.
</ui-dialog>
````
