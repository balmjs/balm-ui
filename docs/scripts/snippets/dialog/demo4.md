````html
<ui-button primary effect raised @click.native="showDialog('showAnimation')">animate.css</ui-button>
<ui-button primary effect raised @click.native="showDialog('showAnimation2')">another cooler animate</ui-button>
````

````html
<ui-dialog
  transition
  enter-active-class="animated fadeInDown"
  leave-active-class="animated fadeOutUp"
  :show="showAnimation"
  @on-close="closeDialog('showAnimation')">
  <h4>Use animate.css library.</h4>
  <br>You can also use other animate library.
</ui-dialog>

<ui-dialog
  transition
  enter-active-class="animated flipInX"
  leave-active-class="animated flipOutX"
  :show="showAnimation2"
  @on-close="closeDialog('showAnimation2')">
  <h4>Use animate.css library, too.</h4>
</ui-dialog>
````
````javascript
import 'animate.css'
````

````css
.mdl-dialog.animated {
  animation-duration: .4s;
}
````
