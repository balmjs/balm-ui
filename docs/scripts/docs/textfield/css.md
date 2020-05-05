- `<ui-textfield>`

```css
@use '@material/textfield/variables' with (
  $fullwidth-bottom-line-color: rgba(theme-variables.prop-value(on-surface), .12),
  $disabled-border: rgba(theme-variables.prop-value(on-surface), .06),
  $disabled-icon: rgba(theme-variables.prop-value(on-surface), .3),
  $bottom-line-hover: rgba(theme-variables.prop-value(on-surface), .87),
  $bottom-line-idle: rgba(theme-variables.prop-value(on-surface), .42),
  $label: rgba(theme-variables.prop-value(on-surface), .6),

  $ink-color: rgba(theme-variables.prop-value(on-surface), .87),
  $helper-text-color: rgba(theme-variables.prop-value(on-surface), .6),
  $icon-color: rgba(theme-variables.prop-value(on-surface), .54),
  $focused-label-color: rgba(theme-variables.prop-value(primary), .87),
  $placeholder-ink-color: rgba(theme-variables.prop-value(on-surface), .54),
  $affix-color: rgba(theme-variables.prop-value(on-surface), .6),

  $disabled-label-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-ink-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-placeholder-ink-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-helper-text-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-affix-color: rgba(theme-variables.prop-value(on-surface), .38),

  $background: color.mix(theme-variables.prop-value(on-surface), theme-variables.prop-value(surface), 4%),
  $disabled-background: color.mix(theme-variables.prop-value(on-surface), theme-variables.prop-value(surface), 2%),
  $secondary-text: rgba(theme-variables.prop-value(on-surface), .6),

  $outlined-idle-border: rgba(theme-variables.prop-value(on-surface), .38),
  $outlined-disabled-border: rgba(theme-variables.prop-value(on-surface), .06),
  $outlined-hover-border: rgba(theme-variables.prop-value(on-surface), .87),

  $textarea-border: rgba(theme-variables.prop-value(on-surface), .73),
  $textarea-background: rgba(theme-variables.prop-value(surface), 1),
  $textarea-disabled-border-color: rgba(theme-variables.prop-value(on-surface), .26),
  $textarea-disabled-background: rgba(249, 249, 249, 1),

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
  $outlined-label-position-y: get-outlined-label-position-y($height),
  $outlined-with-leading-icon-label-position-x: 32px,
  $textarea-label-position-y: 130%,
  $helper-line-padding: 16px,
  $filled-baseline-top: 40px,
  $input-height: 28px,
  $textarea-input-margin-top: 8px,
  $textarea-input-handle-margin: 1px,
  $textarea-input-padding-bottom: 16px,

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
