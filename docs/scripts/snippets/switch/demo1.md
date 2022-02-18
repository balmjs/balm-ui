```html
<ui-switch
  v-model="toggle1"
  input-id="basic-switch"
  :true-value="1"
  :false-value="0"
  @selected="balmUI.onChange('toggle1Label', $event)"
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
  @selected="balmUI.onChange('toggle2Label', $event)"
>
  {{ toggle2Label }} (custom color)
</ui-switch>
<label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
```

```js
export default {
  setup() {
    const balmUI = useEvent();

    return {
      balmUI
    };
  },
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
@use 'sass:color';
@use '@material/switch/switch-theme' as switch-theme;
@use '@material/theme' as theme-color;

.demo-switch--custom {
  $primary-color: theme-color.$red-500;
  $_inverse-primary: color.scale($primary-color, $lightness: 75%);
  $_primary-state-content: color.scale($primary-color, $blackness: 50%);

  @include switch-theme.theme-styles(
    (
      selected-focus-handle-color: $_primary-state-content,
      selected-focus-state-layer-color: $primary-color,
      selected-focus-track-color: $_inverse-primary,
      selected-handle-color: $primary-color,
      selected-hover-handle-color: $_primary-state-content,
      selected-hover-state-layer-color: $primary-color,
      selected-hover-track-color: $_inverse-primary,
      selected-pressed-handle-color: $_primary-state-content,
      selected-pressed-state-layer-color: $primary-color,
      selected-pressed-track-color: $_inverse-primary,
      selected-track-color: $_inverse-primary
    )
  );
}
```
