```html
<ui-switch id="basic-switch"
  :trueValue="1"
  :falseValue="0"
  v-model="toggle1">
  {{ toggle1 }}
</ui-switch>

<ui-switch id="basic-switch-custom"
  class="demo-switch--custom"
  trueValue="on"
  falseValue="off"
  v-model="toggle2">
  {{ toggle2 }} (custom color)
</ui-switch>
```

```js
export default {
  data() {
    return {
      toggle1: 0,
      toggle2: 'on'
    };
  }
};
```

```css
/* Sass code */
.demo-switch--custom {
  $color: $material-color-red-500;

  @include mdc-switch-track-color($color);
  @include mdc-switch-knob-color($color);
  @include mdc-switch-focus-indicator-color($color);
}
```
