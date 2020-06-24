- `<ui-textfield>`

```css
@use '@material/textfield/variables' with (
  $error: error !default;
  $fullwidth-bottom-line-color: rgba(
    theme-variables.prop-value(on-surface),
    0.12
  ),
  $disabled-border: rgba(theme-variables.prop-value(on-surface), 0.06),
  $disabled-icon: rgba(theme-variables.prop-value(on-surface), 0.3),
  $bottom-line-hover: rgba(theme-variables.prop-value(on-surface), 0.87),
  $bottom-line-idle: rgba(theme-variables.prop-value(on-surface), 0.42),
  $label: rgba(theme-variables.prop-value(on-surface), 0.6),

  $ink-color: rgba(theme-variables.prop-value(on-surface), 0.87),
  $helper-text-color: rgba(theme-variables.prop-value(on-surface), 0.6),
  $icon-color: rgba(theme-variables.prop-value(on-surface), 0.54),
  $focused-label-color: rgba(theme-variables.prop-value(primary), 0.87),
  $placeholder-ink-color: rgba(
    theme-variables.prop-value(on-surface),
    0.54
  ),
  $affix-color: rgba(theme-variables.prop-value(on-surface), 0.6),

  $disabled-label-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-ink-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-placeholder-ink-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-helper-text-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $disabled-affix-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),

  $background: color.mix(
    theme-variables.prop-value(on-surface),
    theme-variables.prop-value(surface),
    4%
  ),
  $disabled-background: color.mix(
    theme-variables.prop-value(on-surface),
    theme-variables.prop-value(surface),
    2%
  ),
  $secondary-text: rgba(theme-variables.prop-value(on-surface), 0.6),

  $outlined-idle-border: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $outlined-disabled-border: rgba(
    theme-variables.prop-value(on-surface),
    0.06
  ),
  $outlined-hover-border: rgba(
    theme-variables.prop-value(on-surface),
    0.87
  ),

  $textarea-border: rgba(theme-variables.prop-value(on-surface), 0.73),
  $textarea-background: rgba(theme-variables.prop-value(surface), 1),
  $textarea-disabled-border-color: rgba(
    theme-variables.prop-value(on-surface),
    0.26
  ),
  $textarea-disabled-background: rgba(249, 249, 249, 1),

  $ripple-target: '.mdc-text-field__ripple';
  $outlined-stroke-width: 2px,
  $height: 56px,
  $minimum-height: 40px,
  $minimum-height-for-filled-label: 52px,
  $maximum-height: $height,
  $padding-horizontal: 16px,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    height: (
      default: $height,
      maximum: $maximum-height,
      minimum: $minimum-height,
    ),
  ),
  $label-position-y: floating-label-variables.$position-y,
  $label-offset: 16px,

  $outlined-with-leading-icon-label-position-x: 32px,
  $textarea-outlined-label-position-y: 24.75px,
  $textarea-filled-label-position-y: 10.25px,
  $helper-line-padding: 16px,
  $filled-baseline-top: 40px,
  $input-height: 28px,
  $textarea-label-top: 19px,
  $textarea-outlined-label-top: $textarea-label-top -
    notched-outline-variables.$border-width,
  $textarea-line-height: 1.5rem,
  $textarea-input-handle-margin: 1px,
  $textarea-outlined-input-margin-top: 16px,
  $textarea-outlined-input-margin-bottom: 16px,
  $textarea-outlined-density-config: (
    margin-top: (
      default: $textarea-outlined-input-margin-top,
      maximum: $textarea-outlined-input-margin-top,
      minimum: $textarea-outlined-input-margin-top - 8,
    ),
    margin-bottom: (
      default: $textarea-outlined-input-margin-bottom,
      maximum: $textarea-outlined-input-margin-bottom,
      minimum: $textarea-outlined-input-margin-bottom - 8,
    ),
  ),
  $textarea-outlined-label-density-config: (
    top: (
      default: $textarea-outlined-label-top,
      maximum: $textarea-outlined-label-top,
      minimum: $textarea-outlined-label-top - 8,
    ),
  ),
  $textarea-filled-input-margin-top: 23px,
  $textarea-filled-input-margin-bottom: 9px,
  $textarea-filled-density-config: (
    margin-bottom: (
      default: $textarea-filled-input-margin-bottom,
      maximum: $textarea-filled-input-margin-bottom,
      minimum: $textarea-filled-input-margin-bottom - 4,
    ),
  ),
  $textarea-filled-label-density-config: (
    top: (
      default: $textarea-label-top,
      maximum: $textarea-label-top,
      minimum: $textarea-label-top - 2,
    ),
  ),
  $textarea-filled-no-label-input-margin-top: 16px,
  $textarea-filled-no-label-input-margin-bottom: 16px,
  $textarea-filled-no-label-density-config: (
    margin-top: (
      default: $textarea-filled-no-label-input-margin-top,
      maximum: $textarea-filled-no-label-input-margin-top,
      minimum: $textarea-filled-no-label-input-margin-top - 8,
    ),
    margin-bottom: (
      default: $textarea-filled-no-label-input-margin-bottom,
      maximum: $textarea-filled-no-label-input-margin-bottom,
      minimum: $textarea-filled-no-label-input-margin-bottom - 8,
    ),
  ),
  $textarea-internal-counter-input-margin-bottom: 2px,
  $textarea-internal-counter-baseline-bottom: 16px,

  $prefix-padding: 2px,
  $prefix-end-aligned-padding: 12px,
  $suffix-padding: 12px,
  $suffix-end-aligned-padding: 2px
);
```

- `<ui-textfield-icon>`

```css
@use '@material/textfield/icon/variables' with (
  $icon-size: 24px,
  $dense-icon-size: 20px,
  $leading-icon-padding-left: 16px,
  $leading-icon-padding-right: 8px,
  $trailing-icon-padding-left: 12px,
  $trailing-icon-padding-right: 12px
);
```
