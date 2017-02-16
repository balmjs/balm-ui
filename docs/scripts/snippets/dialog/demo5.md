````html
<ui-button primary effect raised @click.native="showDialog('showCustomWidth')">custom width</ui-button>
````

````html
<ui-dialog
  :width="1000"
  :show="showCustomWidth"
  @on-close="closeDialog('showCustomWidth')">
  <h4>I am a dialog that is wider than others, because I set the custom width.</h4>
  <br>:use { width } prop.
  <br>:default 520 (px)
</ui-dialog>
````
