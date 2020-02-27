```css
@use '@material/select/variables' with (
  $arrow-padding: 52px,
  $label-padding: 16px,
  $height: 56px,
  $icon-padding: 48px,

  $ink-color: rgba(variables.prop-value(on-surface), .87),
  $dropdown-color: variables.prop-value(on-surface),
  $icon-color: rgba(variables.prop-value(on-surface), .54),
  $label-color: rgba(variables.prop-value(on-surface), .6),
  $focused-label-color: rgba(variables.prop-value(primary), .87),
  $bottom-line-idle-color: rgba(variables.prop-value(on-surface), .42),
  $bottom-line-hover-color: rgba(variables.prop-value(on-surface), .87),
  $helper-text-color: rgba(variables.prop-value(on-surface), .6),

  $fill-color: color.mix(variables.prop-value(on-surface), variables.prop-value(surface), 4%),

  $dropdown-opacity: .54,

  $disabled-label-color: rgba(variables.prop-value(on-surface), .38),
  $disabled-icon-color: rgba(variables.prop-value(on-surface), .38),
  $disabled-ink-color: rgba(variables.prop-value(on-surface), .38),
  $disabled-fill-color: color.mix(variables.prop-value(on-surface), variables.prop-value(surface), 2%),
  $disabled-dropdown-opacity: .38,

  $outlined-idle-border: rgba(variables.prop-value(on-surface), .38),
  $outlined-hover-border: rgba(variables.prop-value(on-surface), .87),

  $outlined-disabled-border: rgba(variables.prop-value(on-surface), .16),

  $label-position-y: 70%,
  $outline-label-offset: 16px,
  $outlined-label-position-y: 130%,
  $outlined-dense-label-position-y: 110%,
  $outlined-with-leading-icon-label-position-x: 32px,

  $dropdown-transition-duration: 150ms
);
```
