```html
<ui-button></ui-button>
```

```html
<ui-dialog
  class="custom-slot-title"
  transition
  enter-active-class="animated fadeInDown"
  leave-active-class="animated fadeOutUp"
  :show="showSlot"
  @on-close="closeDialog('showSlot')">
  <div slot="title" class="title">The title bar that has been changed <i class="close" @click="closeDialog('showSlot')"></i></div>
  <h4>Notice the title bar, especially the closing button in the upper right corner.</h4>
  <br>:use  << slot="title" >> to change the structure of the title bar.
  <br>:note  If you just want to change the text, use { title } prop.
</ui-dialog>
```

```css
.custom-slot-title .title {
  display: flex;
  font-size: 24px;
  justify-content: space-between;
}
.custom-slot-title .title .close {
  display: flex;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: transform 1s ease;
  transform: rotate(0deg);
  position: relative;
}
.custom-slot-title .title .close::before, .custom-slot-title .title .close::after {
  display: block;
  position: absolute;
  width: 16px;
  left: 4.3px;
  top: 12.1px;
  content: "";
  height: 2px;
  background-color: #CCCCCC;
}
.custom-slot-title .title .close::before {
  transform: rotate(45deg);
}
.custom-slot-title .title .close::after {
  transform: rotate(135deg);
}
.custom-slot-title .title .close:hover {
  transform: rotate(360deg);
}
.custom-slot-title .title .close:active {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .5) inset;
}
```
