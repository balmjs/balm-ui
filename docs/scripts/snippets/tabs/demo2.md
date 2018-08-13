```html
<h6 :class="$tt('headline6')">Text Label and Icon</h6>
<div class="demo">
  <ui-tab-bar type="both" v-model="active">
    <ui-tab v-for="(tab, index) in tabs" :key="index"
      type="both"
      :icon="tab.icon">
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">Stacked Text Label and Icon</h6>
<div class="demo">
  <ui-tab-bar type="both" v-model="active">
    <ui-tab v-for="(tab, index) in tabs" :key="index"
      type="both"
      :icon="tab.icon"
      stacked>
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>
```

```js
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          icon: 'phone',
          url: '#recents'
        },
        {
          icon: 'favorite',
          url: '#favorites'
        },
        {
          icon: 'person_pin',
          url: '#nearby'
        }
      ]
    };
  }
};
```
