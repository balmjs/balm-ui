````html
<ui-button primary effect raised @click.native="showDialog('showFade')">fade in</ui-button>
````

````html
<ui-dialog
  transition
  enter-active-class="am-enter-active"
  enter-class="am-enter"
  leave-active-class="am-leave-active"
  :show="showFade"
  @on-close="closeDialog('showFade')">
  <h4>Fade in...</h4>
  <br>:use { transition, enter-active-class, enter-class, leave-class, leave-active-class } props.
</ui-dialog>
````

````css
.am-enter-active, .am-leave-active {
  transition: all .4s;
}
.am-enter, .am-leave-active {
  opacity: 0;
}
````
