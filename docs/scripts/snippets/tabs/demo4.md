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
@use '@material/tab/mixins' as tab-mixins;
@use '@material/tab-indicator/mixins' as tab-indicator-mixins;
@use '@material/ripple/mixins' as ripple-mixins;
@use '@material/theme' as color;

.demo-tab {
  flex: 0 1 auto;
}

.custom-tab {
  @include tab-mixins.text-label-color(color.$blue-300);
  @include tab-mixins.icon-color(color.$orange-300);
  .custom-tab-indicator {
    @include tab-indicator-mixins.underline-color(color.$pink-a700);
    @include tab-indicator-mixins.underline-height(5px);
    @include tab-indicator-mixins.underline-top-corner-radius(5px);
  }
  .mdc-tab__ripple {
    @include ripple-mixins.states(color.$pink-100);
  }
  &.mdc-tab--active {
    @include tab-mixins.text-label-color(color.$blue-900);
    @include tab-mixins.icon-color(color.$orange-900);
  }
}
```
