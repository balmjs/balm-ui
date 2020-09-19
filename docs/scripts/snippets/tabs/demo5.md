```html
<ui-tab-bar v-model="active" class="hero-demo-tab-bar">
  <ui-tab v-for="(item, index) in list" :key="index"> {{ item }} </ui-tab>
</ui-tab-bar>
```

```css
.hero-demo-tab-bar {
  background-color: #f2f2f2;
  max-width: 420px;
}
```
