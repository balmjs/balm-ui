```html
<ui-switch
  v-model="toggle1"
  input-id="basic-switch"
  :true-value="1"
  :false-value="0"
>
  {{ toggle1 }}
</ui-switch>
<label for="basic-switch">{{ toggle1 }}</label>

<ui-switch
  v-model="toggle2"
  input-id="basic-switch-custom"
  class="demo-switch--custom"
  true-value="on"
  false-value="off"
>
  {{ toggle2 }} (custom color)
</ui-switch>
<label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
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

```scss
/* Sass code */
.demo-switch--custom {
  $color: $material-color-red-500;

  @include mdc-switch-track-color($color);
  @include mdc-switch-knob-color($color);
  @include mdc-switch-focus-indicator-color($color);
}
```
