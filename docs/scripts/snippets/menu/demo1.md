```html
<ui-menu effect :menu="menu" @clicked="onMenu">
  <template slot="icon">
    <i class="material-icons">person</i>
  </template>
</ui-menu>
```

```js
export default {
  data() {
    return {
      menu: [{
        url:'/a',
        name: 'Item A'
      }, {
        url:'/b',
        name: 'Item B',
        disabled: true
      }, {
        url:'/c',
        name: 'Item C'
      }]
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  }
};
```
