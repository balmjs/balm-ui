- `<ui-textfield>`

```scss
@use '@material/textfield' with (
  $error: error,
  $disabled-border: rgba(theme-color.prop-value(on-surface), 0.06),
  $disabled-icon: rgba(theme-color.prop-value(on-surface), 0.3),
  $bottom-line-hover: rgba(theme-color.prop-value(on-surface), 0.87),
  $bottom-line-idle: rgba(theme-color.prop-value(on-surface), 0.42),
  $label: rgba(theme-color.prop-value(on-surface), 0.6),

  $ink-color: rgba(theme-color.prop-value(on-surface), 0.87),
  $helper-text-color: rgba(theme-color.prop-value(on-surface), 0.6),
  $icon-color: rgba(theme-color.prop-value(on-surface), 0.54),
  $focused-label-color: rgba(theme-color.prop-value(primary), 0.87),
  $placeholder-ink-color: rgba(theme-color.prop-value(on-surface), 0.54),
  $affix-color: rgba(theme-color.prop-value(on-surface), 0.6),

  $disabled-label-color: rgba(theme-color.prop-value(on-surface), 0.38),
  $disabled-ink-color: rgba(theme-color.prop-value(on-surface), 0.38),
  $disabled-placeholder-ink-color: rgba(
    theme-color.prop-value(on-surface),
    0.38
  ),
  $disabled-helper-text-color: rgba(
    theme-color.prop-value(on-surface),
    0.38
  ),
  $disabled-affix-color: rgba(theme-color.prop-value(on-surface), 0.38),

  $background: color.mix(
    theme-color.prop-value(on-surface),
    theme-color.prop-value(surface),
    4%
  ),
  $disabled-background: color.mix(
    theme-color.prop-value(on-surface),
    theme-color.prop-value(surface),
    2%
  ),
  $secondary-text: rgba(theme-color.prop-value(on-surface), 0.6),

  $outlined-idle-border: rgba(theme-color.prop-value(on-surface), 0.38),
  $outlined-disabled-border: rgba(
    theme-color.prop-value(on-surface),
    0.06
  ),
  $outlined-hover-border: rgba(theme-color.prop-value(on-surface), 0.87),

  $textarea-border: rgba(theme-color.prop-value(on-surface), 0.73),
  $textarea-background: rgba(theme-color.prop-value(surface), 1),
  $textarea-disabled-border-color: rgba(
    theme-color.prop-value(on-surface),
    0.26
  ),
  // cannot be transparent because multiline textarea input
  // will make text unreadable
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
  $shape-radius: small,
  $label-position-y: floating-label-variables.$position-y,
  $label-offset: 16px,
  $outlined-with-leading-icon-label-position-x: 32px,
  $textarea-outlined-label-position-y: 24.75px, // visually ~4dp from top to baseline
  $textarea-filled-label-position-y: 10.25px, // visually ~20dp from top to label baseline
  $helper-line-padding: 16px,
  $filled-baseline-top: 40px,
  $input-height: 28px,
  $textarea-label-top: 19px, // visually ~32dp from top to label baseline
  $textarea-outlined-label-top: $textarea-label-top -
    notched-outline-variables.$border-width,
  $textarea-line-height: 1.5rem, // 24dp from baseline to baseline
  $textarea-input-handle-margin: 1px,
  // Outlined textarea's first line should be placed at the same position as
  // outlined textfield, and should look identical if it is 1 row. Since textfield
  // is centered and font metrics vary for where the baseline is, the best way to
  // ensure textarea and textfield align is with padding. At 56px height with a
  // 24px line-height, a centered textfield has 16px of top and bottom padding.
  // Textarea should use this to position itself.
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
  ), // remove 1/2 of scale to -4 for minimum
  $textarea-outlined-label-density-config: (
    top: (
      default: $textarea-outlined-label-top,
      maximum: $textarea-outlined-label-top,
      minimum: $textarea-outlined-label-top - 8,
    ),
  ), // remove 1/2 of scale to -4 for minimum
  $textarea-filled-input-margin-top: 23px, // visually ~40dp from top to baseline
  $textarea-filled-input-margin-bottom: 9px, // visually ~16dp from baseline to bottom
  $textarea-filled-density-config: (
    margin-bottom: (
      default: $textarea-filled-input-margin-bottom,
      maximum: $textarea-filled-input-margin-bottom,
      minimum: $textarea-filled-input-margin-bottom - 4,
    ),
  ), // scale to -1 for minimum
  $textarea-filled-label-density-config: (
    top: (
      default: $textarea-label-top,
      maximum: $textarea-label-top,
      minimum: $textarea-label-top - 2,
    ),
  ), // remove 1/2 of scale to -1 for minimm
  $textarea-filled-no-label-input-margin-top: 16px, // see above explanation for outlined textarea margin
  $textarea-filled-no-label-input-margin-bottom: 16px, // see above explanation for outlined textarea margin
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
  ), // remove 1/2 of scale to -4 for minimum
  $textarea-internal-counter-input-margin-bottom: 2px, // visually ~20dp from baseline to counter baseline
  $textarea-internal-counter-baseline-bottom: 16px,
  // Note that the scale factor is an eyeballed approximation of what's shown in the mocks.

  $prefix-padding: 2px,
  $prefix-end-aligned-padding: 12px,
  $suffix-padding: 12px,
  $suffix-end-aligned-padding: 2px
);
```

- `<ui-textfield-icon>`

```scss
@use '@material/textfield/icon' with (
  $icon-size: 24px,
  $dense-icon-size: 20px,
  $touch-target-size: 48px,

  $leading-icon-padding-left: 16px,
  $leading-icon-padding-right: 8px,
  $trailing-icon-padding-left: 12px,
  $trailing-icon-padding-right: 12px
);
```
