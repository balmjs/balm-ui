```html
<ui-menu effect>
  <template slot="icon">
    <i class="material-icons">settings</i>
  </template>
  <ui-menuitem v-for="item in menu" :item="item" @clicked="onMenu">
    <a :href="item.url">{{ item.name }}</a>
  </ui-menuitem>
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
