```html
<div class="demo-content">
  <ui-menu-anchor absolute>
    <ui-button raised @click="open = true">Show Menu</ui-button>

    <ui-menu v-model="open" @selected="onSelected" @cancel="onCancel">
      <ui-menuitem nested>
        <ui-menuitem>
          <ui-menuitem-icon>
            <svg-selected></svg-selected>
          </ui-menuitem-icon>
          <ui-menuitem-text>Single</ui-menuitem-text>
        </ui-menuitem>
        <ui-menuitem disabled>
          <ui-menuitem-icon>
            <svg-selected></svg-selected>
          </ui-menuitem-icon>
          <ui-menuitem-text>1.15</ui-menuitem-text>
        </ui-menuitem>
        <ui-menuitem>
          <ui-menuitem-icon>
            <svg-selected></svg-selected>
          </ui-menuitem-icon>
          <ui-menuitem-text>Double</ui-menuitem-text>
        </ui-menuitem>
        <ui-menuitem selected>
          <ui-menuitem-icon>
            <svg-selected></svg-selected>
          </ui-menuitem-icon>
          <ui-menuitem-text>Custom: 1.2</ui-menuitem-text>
        </ui-menuitem>
      </ui-menuitem>
      <ui-item-divider></ui-item-divider>
      <ui-menuitem>
        <ui-menuitem-text>Add space before paragraph</ui-menuitem-text>
      </ui-menuitem>
      <ui-menuitem>
        <ui-menuitem-text>Add space after paragraph</ui-menuitem-text>
      </ui-menuitem>
      <ui-item-divider></ui-item-divider>
      <ui-menuitem>
        <ui-menuitem-text>Custom spacing...</ui-menuitem-text>
      </ui-menuitem>
    </ui-menu>
  </ui-menu-anchor>
</div>
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

```css
.demo-content {
  position: relative;
}
```
