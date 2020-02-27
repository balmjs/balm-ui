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

  $disabled-label-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-ink-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-placeholder-ink-color: rgba(theme-variables.prop-value(on-surface), .38),
  $disabled-helper-text-color: rgba(theme-variables.prop-value(on-surface), .38),

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
  $dense-label-position-y: 70%,
  $dense-label-scale: .8,
  $outlined-label-position-y:
      get-outlined-label-position-y($height),
  $outlined-dense-label-position-y: 120%,
  $outlined-with-leading-icon-label-position-x: 0,
  $outlined-dense-with-leading-icon-label-position-x: 21px,
  $textarea-label-position-y: 130%,
  $helper-line-padding: 16px,
  $input-padding: 16px,
  $input-padding-top: 20px,
  $input-padding-bottom: 6px,
  $outlined-input-padding-top: 12px,
  $outlined-input-padding-bottom: 14px,
  $input-border-bottom: 1px
);
```
