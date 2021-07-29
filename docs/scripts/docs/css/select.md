- `<ui-select-icon>`

```scss
@use '@material/select/select-icon-theme' with (
  $icon-size: 24px,
  $dense-icon-size: 20px,
  $icon-horizontal-margin: 12px,

  $icon-color: rgba(theme-variables.prop-value(on-surface), 0.54),
  $disabled-icon-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  )
);
```

- `<ui-select>`

```scss
@use '@material/select/select-theme' with (
  $arrow-padding: 52px,
  $label-padding: 16px,
  $height: 56px,
  $filled-baseline-top: 40px,
  $selected-text-height: 28px,
  $anchor-padding-left: 16px,
  $anchor-padding-left-with-leading-icon: 0,
  $anchor-padding-right: 0,
  $outlined-stroke-width: 2px,
  $default-width: 200px,
  $shape-radius: small,

  $minimum-height: 40px,
  $minimum-height-for-filled-label: 52px,
  $maximum-height: $height,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    height: (
      default: $height,
      maximum: $maximum-height,
      minimum: $minimum-height,
    ),
  ),

  $ink-color: rgba(theme-variables.prop-value(on-surface), 0.87),
  $dropdown-icon-color: rgba(
    theme-variables.prop-value(on-surface),
    0.54
  ),
  $label-color: rgba(theme-variables.prop-value(on-surface), 0.6),
  $focused-label-color: rgba(theme-variables.prop-value(primary), 0.87),
  $bottom-line-idle-color: rgba(
    theme-variables.prop-value(on-surface),
    0.42
  ),
  $bottom-line-hover-color: rgba(
    theme-variables.prop-value(on-surface),
    0.87
  ),

  $fill-color: color.mix(
    theme-variables.prop-value(on-surface),
    theme-variables.prop-value(surface),
    4%
  ),

  // Disabled Styles
  $disabled-label-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-ink-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-fill-color: color.mix(
    theme-variables.prop-value(on-surface),
    theme-variables.prop-value(surface),
    2%
  ),
  $disabled-fill-border: rgba(
    theme-variables.prop-value(on-surface),
    0.06
  ),
  $disabled-bottom-line-color: rgba(
    theme-variables.prop-value(on-surface),
    0.06
  ),
  $disabled-dropdown-icon-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-outline-color: rgba(
    theme-variables.prop-value(on-surface),
    0.06
  ),

  $outlined-idle-border: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $outlined-hover-border: rgba(
    theme-variables.prop-value(on-surface),
    0.87
  ),

  $label-position-y: 106%,
  $outline-label-offset: 16px,
  $outlined-label-position-y: get-outlined-label-position-y($height),
  $outlined-with-leading-icon-label-position-x: 32px,

  $dropdown-transition-duration: 150ms,
  // Transition durartions to active state
  $icon-active-fade-out-duration: 0.33 * $dropdown-transition-duration,
  $icon-active-fade-in-duration: 0.67 * $dropdown-transition-duration,
  // Transition durartions to inactive state
  $icon-inactive-fade-out-duration: 0.5 * $dropdown-transition-duration,
  $icon-inactive-fade-in-duration: 0.5 * $dropdown-transition-duration,

  // Error colors
  $error-color: error
);
```
