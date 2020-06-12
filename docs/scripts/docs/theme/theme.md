### 2.1 Theme color (`mdc-theme--<THEME_STYLE>`)

```js
$themeColor(style); // Output: classname

$setTheme(style, value); // Manual custom theme for global
```

| Param   | Type   | Default | Description        |
| ------- | ------ | ------- | ------------------ |
| `style` | string | `''`    | Theme style name.  |
| `value` | string | `''`    | Theme color value. |

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
$textColor(style, tone); // Output: classname

$setTextTheme(style, tone, value); // Manual custom theme for global
```

| Param   | Type   | Default        | Description       |
| ------- | ------ | -------------- | ----------------- |
| `style` | String | `''`           | Text style name.  |
| `tone`  | String | `'background'` | Theme tone name.  |
| `value` | String | `''`           | Text color value. |

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
