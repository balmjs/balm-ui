```html
<ui-tab-bar v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
    {{ tab.label }}
  </ui-tab>
</ui-tab-bar>
```

```js
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          label: 'Item One',
          url: '#one',
          panel: 'panel-1'
        },
        {
          label: 'Item Two',
          url: '#two',
          panel: 'panel-2'
        },
        {
          label: 'Item Three',
          url: '#three',
          panel: 'panel-3'
        }
      ]
    };
  }
};
```
