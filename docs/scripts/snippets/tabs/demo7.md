```html
<ui-tab-bar class="custom-demo-tab-bar" v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index"
    type="both"
    :icon="tab.icon"
    minWidth
    contentIndicator>
    {{ tab.text }}
  </ui-tab>
</ui-tab-bar>
```

```css
/* Sass code */
.custom-demo-tab-bar {
  .mdc-tab {
    @include mdc-typography(subtitle1);
    @include mdc-tab-fixed-width(120px);
    @include mdc-tab-text-label-color($material-color-blue-600);
    @include mdc-tab-icon-color($material-color-blue-600);
  }
  .mdc-tab__ripple {
    @include mdc-states($material-color-yellow-700);
  }
  .mdc-tab--active {
    @include mdc-tab-text-label-color($material-color-blue-900);
    @include mdc-tab-icon-color($material-color-blue-900);
  }
  .mdc-tab-indicator {
    @include mdc-tab-indicator-underline-height(5px);
    @include mdc-tab-indicator-underline-color($material-color-yellow-700);
  }
}
```
