```html
<ui-tab-bar v-model="active" class="custom-demo-tab-bar">
  <ui-tab
    v-for="(tab, index) in tabs"
    :key="index"
    type="textWithIcon"
    :icon="tab.icon"
    min-width
    content-indicator
  >
    {{ tab.text }}
  </ui-tab>
</ui-tab-bar>
```

```scss
@use '@material/tab/mixins' as tab-mixins;
@use '@material/tab-indicator/mixins' as tab-indicator-mixins;
@use '@material/ripple/mixins' as ripple-mixins;
@use '@material/theme' as color;
@use '@material/typography/mixins' as typography-mixins;

.custom-demo-tab-bar {
  .mdc-tab {
    @include typography-mixins.typography(subtitle1);
    @include tab-mixins.fixed-width(120px);
    @include tab-mixins.text-label-color(color.$blue-600);
    @include tab-mixins.icon-color(color.$orange-600);
  }
  .mdc-tab__ripple {
    @include ripple-mixins.states(color.$yellow-700);
  }
  .mdc-tab--active {
    @include tab-mixins.text-label-color(color.$blue-900);
    @include tab-mixins.icon-color(color.$blue-900);
  }
  .mdc-tab-indicator {
    @include tab-indicator-mixins.underline-height(5px);
    @include tab-indicator-mixins.underline-color(color.$yellow-700);
  }
}
```
