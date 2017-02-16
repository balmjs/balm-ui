````html
<ui-button primary effect raised @click.native="showDialog('showEvent')">event</ui-button>
````

````html
<ui-dialog
  :show="showEvent"
  @on-close="closeDialog('showEvent')"
  @on-cancel="onCancel"
  @on-confirm="onConfirm">
  <h4>Open the browser console and view the output of the console by clicking the Cancel or OK button.</h4>
  <br>:use [ @on-cancel, @on-confirm ] to achieve the purpose of custom event handling。
</ui-dialog>
````

````javascript
export default {
  methods: {
    onCancel(){
      console.log('clicked the Cancel button!');
    },
    onConfirm(){
      console.log('clicked the OK button!');
    }
  }
}
````
