````html
<ui-button primary effect raised @click.native="showDialog('show')">basic dialog</ui-button>
<ui-button primary effect raised @click.native="showDialog('showForce')">cannot close dialog by clicking on the mask.</ui-button>
````
````html
<!-- Basic Dialog -->
<ui-dialog :show="show" @on-close="closeDialog('show')">
  <h4>I am a basic dialog.</h4>
  <br>:use [ @on-close ] to close the dialog. 
</ui-dialog>

<ui-dialog :show="showForce" @on-close="closeDialog('showForce')" force>
  <h4>You cannot close me by clicking on my mask。</h4>
  <br>:use { force } prop.
</ui-dialog>
````

````javascript
export default {
  data(){
    return {
      showForce: false,
      show: false
    }
  },
  methods: {
    showDialog(name){
      this[name] = true;
    },
    closeDialog(name, fn){
      this[name] = false;
      typeof fn === 'function' && fn();
    } 
  }
}
````
