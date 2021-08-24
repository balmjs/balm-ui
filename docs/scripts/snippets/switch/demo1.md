```html
<ui-switch
  v-model="toggle1"
  input-id="basic-switch"
  :true-value="1"
  :false-value="0"
  @selected="$balmUI.onChange('toggle1Label', $event)"
>
  {{ toggle1 }}
</ui-switch>
<label for="basic-switch">{{ toggle1Label }}</label>

<ui-switch
  v-model="toggle2"
  input-id="basic-switch-custom"
  class="demo-switch--custom"
  true-value="on"
  false-value="off"
  @selected="$balmUI.onChange('toggle2Label', $event)"
>
  {{ toggle2Label }} (custom color)
</ui-switch>
<label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
```

```js
export default {
  data() {
    return {
      toggle1: false,
      toggle1Label: 0,
      toggle2: true,
      toggle2Label: 'on'
    };
  }
};
```

```scss
/* Sass code */
.demo-switch--custom {
  $color: $material-color-red-500;

  @include mdc-switch-track-color($color);
  @include mdc-switch-knob-color($color);
  @include mdc-switch-focus-indicator-color($color);
}
```
