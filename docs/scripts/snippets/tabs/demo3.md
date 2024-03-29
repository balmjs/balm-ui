```html
<h6 :class="$tt('headline6')">Text Label Width-Matching Indicator</h6>
<div class="example">
  <ui-tab-bar v-model="active">
    <ui-tab v-for="(tab, index) in tabs" :key="index" content-indicator>
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">Text Label with Icon Indicator</h6>
<div class="example">
  <ui-tab-bar v-model="active">
    <ui-tab v-for="(tab, index) in tabs" :key="index">
      {{ tab.text }}
      <template #indicator>
        <ui-tab-indicator type="icon">{{ tab.indicator }}</ui-tab-indicator>
      </template>
    </ui-tab>
  </ui-tab-bar>
</div>
```

```js
const tabs = [
  {
    text: 'Favorites',
    icon: 'favorite',
    indicator: 'crop_square'
  },
  {
    text: 'Recents',
    icon: 'phone',
    indicator: 'panorama_fish_eye'
  },
  {
    text: 'Nearby',
    icon: 'near_me',
    indicator: 'change_history'
  }
];

export default {
  data() {
    return {
      tabs,
      active: 0
    };
  }
};
```
