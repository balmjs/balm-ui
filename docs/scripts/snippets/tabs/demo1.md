```html
<h6 :class="$tt('headline6')">Text Label</h6>
<div class="demo">
  <ui-tab-bar v-model="active">
    <ui-tab v-for="(tab, index) in tabs" :key="index">{{ tab.text }}</ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">Icon</h6>
<div class="demo">
  <ui-tab-bar v-model="active">
    <ui-tab
      v-for="(tab, index) in tabs"
      :key="index"
      type="icon"
      :icon="tab.icon"
    >
    </ui-tab>
  </ui-tab-bar>
</div>
```

```js
const tabs = [
  {
    text: 'Favorites',
    icon: 'favorite'
  },
  {
    text: 'Recents',
    icon: 'phone'
  },
  {
    text: 'Nearby',
    icon: 'near_me'
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
