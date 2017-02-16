```html
<ui-button primary effect raised @click.native="showDialog('showAlert')">open alert</ui-button>
```

```html
<ui-alert
  :show="showAlert"
  @on-click="closeDialog('showAlert', clickButton)"
  @on-close="closeDialog('showAlert')">
  <h4>Hello, Balm!</h4>
</ui-alert>
```

```javascript
export default {
  data() {
    return {
      showAlert: false
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
    clickButton(){
      console.log('clicked the button!');
    }
  }
}
```
