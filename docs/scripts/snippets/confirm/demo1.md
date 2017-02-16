```html
<ui-button primary effect raised @click.native="showDialog('showConfirm')">open confirm</ui-button>
```

```html
<ui-confirm
  :show="showConfirm"
  @on-close="closeDialog('showConfirm')"
  @on-cancel="onCancel"
  @on-confirm="onConfirm">
  <h4>Hello, Balm!</h4>
</ui-confirm>
```

```javascript
export default {
  data() {
    return {
      showConfirm: false
    }
  },
  methods: {
    showDialog(name){
      this[name] = true;
    },
    closeDialog(name, fn){
      this[name] = false;
      typeof fn === 'function' && fn();
    },
    onCancel(){
      console.log('clicked the Cancel button!');
    },
    onConfirm(){
      console.log('clicked the OK button!');
    }
  }
}
```
