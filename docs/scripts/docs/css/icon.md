```scss
@use 'balm-ui/components/icon' with (
  $font-path: '../fonts',
  $with-subdir: 0,

  $sizes: 18 24 36 48,
  $dark: rgba(0, 0, 0, 0.54),
  $dark-focused: rgba(0, 0, 0, 0.87), // New in 9.19.0
  $dark-inactive: rgba(0, 0, 0, 0.38),
  $light: rgba(255, 255, 255, 0.7),
  $light-focused: rgba(255, 255, 255, 1), // New in 9.19.0
  $light-inactive: rgba(255, 255, 255, 0.5),

  $success: #0f9d58,
  $info: #4285f4,
  $warning: #f4b400,
  $error: #db4437
);
```
