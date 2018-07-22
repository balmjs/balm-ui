```html
<ui-menu-anchor>
  <ui-button raised @click="$balmUI.onShow('open')">Show</ui-button>

  <ui-menu
    v-model="open"
    @selected="onSelected"
    @cancel="onCancel">
    <ui-menuitem v-for="(item, index) in items" :key="index">
      {{ item }}
    </ui-menuitem>
  </ui-menu>
</ui-menu-anchor>
```

```js
export default {
  data() {
    return {
      open: false,
      items: ['Back', 'Forward', 'Reload', '-', 'Save As...', 'Help']
    };
  },
  methods: {
    onSelected(data) {
      console.log('onSelected', data);
    },
    onCancel() {
      console.log('onCancel');
    }
  }
};
```
