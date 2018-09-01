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

### 2.3 Sass Variables

- Background
  - `$mdc-theme-background`
- Foreground
  - `$mdc-theme-surface`
  - `$mdc-theme-on-surface`
- Primary
  - `$mdc-theme-primary`
  - `$mdc-theme-on-primary`
- Secondary
  - `$mdc-theme-secondary`
  - `$mdc-theme-on-secondary`
