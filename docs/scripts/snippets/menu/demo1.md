```html
<ui-menu-anchor>
  <ui-button raised @click="$balmUI.onOpen('open')">Show Menu</ui-button>

  <ui-menu
    v-model="open"
    @selected="onSelected"
    @cancel="onCancel">
    <ui-menuitem nested>
      <ui-menuitem>
        <ui-menuitem-icon>
          <svg-selected></svg-selected>
        </ui-menuitem-icon>
        Single
      </ui-menuitem>
      <ui-menuitem disabled>
        <ui-menuitem-icon>
          <svg-selected></svg-selected>
        </ui-menuitem-icon>
        1.15
      </ui-menuitem>
      <ui-menuitem>
        <ui-menuitem-icon>
          <svg-selected></svg-selected>
        </ui-menuitem-icon>
        Double
      </ui-menuitem>
      <ui-menuitem selected>
        <ui-menuitem-icon>
          <svg-selected></svg-selected>
        </ui-menuitem-icon>
        Custom: 1.2
      </ui-menuitem>
    </ui-menuitem>
    <ui-item-divider></ui-item-divider>
    <ui-menuitem>Add space before paragraph</ui-menuitem>
    <ui-menuitem>Add space after paragraph</ui-menuitem>
    <ui-item-divider></ui-item-divider>
    <ui-menuitem>Custom spacing...</ui-menuitem>
  </ui-menu>
</ui-menu-anchor>
```

```js
export default {
  data() {
    return {
      open: false
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
