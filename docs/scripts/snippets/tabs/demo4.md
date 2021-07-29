```html
<ui-tab-bar v-model="active" class="custom-demo">
  <ui-tab
    v-for="(tab, index) in tabs"
    :key="index"
    class="demo-tab custom-tab"
    type="textWithIcon"
    :icon="tab.icon"
    stacked
    content-indicator
  >
    {{ tab.text }}
    <template #indicator>
      <ui-tab-indicator class="custom-tab-indicator"></ui-tab-indicator>
    </template>
  </ui-tab>
</ui-tab-bar>
```

```scss
/* Sass code */
.demo-tab {
  flex: 0 1 auto;
}

.custom-tab {
  @include mdc-tab-text-label-color($material-color-blue-300);
  @include mdc-tab-icon-color($material-color-orange-300);
  .custom-tab-indicator {
    @include mdc-tab-indicator-underline-color($material-color-pink-a700);
    @include mdc-tab-indicator-underline-height(5px);
    @include mdc-tab-indicator-underline-top-corner-radius(5px);
  }
  .mdc-tab__ripple {
    @include mdc-states($material-color-pink-100);
  }
  &.mdc-tab--active {
    @include mdc-tab-text-label-color($material-color-blue-900);
    @include mdc-tab-icon-color($material-color-orange-900);
  }
}
```
