```html
<h6 :class="$tt('headline6')">Start Alignment</h6>
<div class="demo">
  <ui-tab-bar v-model="active" align="start">
    <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">Center Alignment</h6>
<div class="demo">
  <ui-tab-bar v-model="active" align="center">
    <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>

<h6 :class="$tt('headline6')">End Alignment</h6>
<div class="demo">
  <ui-tab-bar v-model="active" align="end">
    <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
      {{ tab.text }}
    </ui-tab>
  </ui-tab-bar>
</div>
```
