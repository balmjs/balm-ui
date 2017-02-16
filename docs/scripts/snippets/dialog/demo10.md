```html
<ui-button primary effect raised @click.native="showDialog('showOutOfHeight')">如果超出屏幕</ui-button>
```

```html
<ui-dialog
  class="large-height"
  transition
  enter-active-class="animated fadeInDown"
  leave-active-class="animated fadeOutUp"
  :show="showOutOfHeight"
  @on-close="closeDialog('showOutOfHeight')">
  <h4 style="height: 1200px;">I am a particularly high dialog!</h4>
</ui-dialog>
```
