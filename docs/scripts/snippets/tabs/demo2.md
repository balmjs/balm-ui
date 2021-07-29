```html
<h6 :class="$tt('headline6')">Text Label and Icon</h6>
<div class="demo">
  <ui-tab-bar v-model="active" type="textWithIcon">
    <ui-tab
      v-for="(tab, index) in tabs"
      :key="index"
      type="textWithIcon"
      :icon="tab.icon"
    >
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">Stacked Text Label and Icon</h6>
<div class="demo">
  <ui-tab-bar v-model="active" type="textWithIcon">
    <ui-tab
      v-for="(tab, index) in tabs"
      :key="index"
      type="textWithIcon"
      :icon="tab.icon"
      stacked
    >
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
