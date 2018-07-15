```html
<ui-tab-bar v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
    {{ tab.text }}
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
          text: 'Item One',
          url: '#one'
        },
        {
          text: 'Item Two',
          url: '#two'
        },
        {
          text: 'Item Three',
          url: '#three'
        }
      ]
    };
  }
};
```
