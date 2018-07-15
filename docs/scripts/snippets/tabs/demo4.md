```html
<ui-tab-bar type="2" v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index"
    :icon="tab.icon" :text="tab.text" :href="tab.url">
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
          text: 'Recents',
          icon: 'phone',
          url: '#recents'
        },
        {
          text: 'Favorites',
          icon: 'favorite',
          url: '#favorites'
        },
        {
          text: 'Nearby',
          icon: 'person_pin',
          url: '#nearby'
        }
      ]
    };
  }
};
```
