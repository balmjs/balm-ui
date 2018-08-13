```html
<ui-tab-bar class="hero-demo-tab-bar" v-model="active">
  <ui-tab v-for="(item, index) in list" :key="index">
    {{ item }}
  </ui-tab>
</ui-tab-bar>
```

```css
.hero-demo-tab-bar {
  background-color: #f2f2f2;
  max-width: 420px;
}
```
