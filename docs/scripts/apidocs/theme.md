### 2.1 Theme color (`mdc-theme--<THEME_STYLE>`)

```js
$themeColor(style);
$setTheme(style, value);
```

| Param | Type     | Default | Description        |
| ----- | -------- | ------- | ------------------ |
| style | `String` | `null`  | Theme style name.  |
| value | `String` | `null`  | Theme color value. |

#### Theme styles

| Name         | CSS Class                 |
| ------------ | ------------------------- |
| primary      | `mdc-theme--primary`      |
| secondary    | `mdc-theme--secondary`    |
| background   | `mdc-theme--background`   |
| surface      | `mdc-theme--surface`      |
| on-primary   | `mdc-theme--on-primary`   |
| on-secondary | `mdc-theme--on-secondary` |
| on-surface   | `mdc-theme--on-surface`   |
| primary-bg   | `mdc-theme--primary-bg`   |
| secondary-bg | `mdc-theme--secondary-bg` |

### 2.2 Text color (`mdc-theme--text-<TEXT_STYLE>-on-<THEME_TONE>`)

```js
$textColor(style, tone);
$setTextTheme(style, tone, value);
```

| Param | Type   | Default        | Description       |
| ----- | ------ | -------------- | ----------------- |
| style | String | `null`         | Text style name.  |
| tone  | String | `'background'` | Theme tone name.  |
| value | String | `null`         | Text color value. |

#### Text styles

- primary
- secondary
- hint
- disabled
- icon

#### Theme tones

- background
- light
- dark

> You can overwrite theme by `$setTheme` and `$setTextTheme` methods.

### 2.3 Sass

| Sass Variable             | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| `$mdc-theme-primary`      | Sets the text color to the theme primary color.          |
| `$mdc-theme-secondary`    | Sets the text color to the theme secondary color.        |
| `$mdc-theme-background`   | Sets the background color to the theme background color. |
| `$mdc-theme-surface`      | Sets the surface color to the theme surface color.       |
| `$mdc-theme-on-primary`   | Sets the text color to the theme on-primary color.       |
| `$mdc-theme-on-secondary` | Sets the text color to the theme on-secondary color.     |
| `$mdc-theme-on-surface`   | Sets the text color to the theme on-surface color.       |
