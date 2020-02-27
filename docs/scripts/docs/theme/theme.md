### 2.1 Theme color (`mdc-theme--<THEME_STYLE>`)

```js
$themeColor(style);
$setTheme(style, value);
```

| Param   | Type   | Default | Description        |
| ------- | ------ | ------- | ------------------ |
| `style` | string | `null`  | Theme style name.  |
| `value` | string | `null`  | Theme color value. |

#### Theme styles

- `primary`
- `secondary`
- `background`
- `surface`
- `on-primary`
- `on-secondary`
- `on-surface`
- `primary-bg`
- `secondary-bg`

### 2.2 Text color (`mdc-theme--text-<TEXT_STYLE>-on-<THEME_TONE>`)

```js
$textColor(style, tone);
$setTextTheme(style, tone, value);
```

| Param   | Type   | Default        | Description       |
| ------- | ------ | -------------- | ----------------- |
| `style` | String | `null`         | Text style name.  |
| `tone`  | String | `'background'` | Theme tone name.  |
| `value` | String | `null`         | Text color value. |

#### Text styles

- `primary`
- `secondary`
- `hint`
- `disabled`
- `icon`

#### Theme tones

- `background`
- `light`
- `dark`

> You can overwrite theme by `$setTheme` and `$setTextTheme` methods.
