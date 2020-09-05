### 2.1 Theme color (`mdc-theme--<THEME_STYLE>`)

```js
$themeColor(style); // Output: classname

$setTheme(style, value); // Manual custom theme for global
```

| Param   | Type   | Default | Description        |
| ------- | ------ | ------- | ------------------ |
| `style` | string | `''`    | Theme style name.  |
| `value` | string | `''`    | Theme color value. |

### Theme styles

- `primary` <div class="theme-example mdc-theme--primary">primary</div>
- `secondary` <div class="theme-example mdc-theme--secondary">secondary</div>
- `background` <div class="theme-example mdc-theme--background">background</div>
- `surface` <div class="theme-example mdc-theme--surface">surface</div>
- `on-primary` <div class="theme-example mdc-theme--on-primary mdc-theme--primary-bg">on-primary</div>
- `on-secondary` <div class="theme-example mdc-theme--on-secondary mdc-theme--secondary-bg">on-secondary</div>
- `on-surface` <div class="theme-example mdc-theme--on-surface">on-surface</div>
- `primary-bg` <div class="theme-example mdc-theme--primary-bg">primary-bg</div>
- `secondary-bg` <div class="theme-example mdc-theme--secondary-bg">secondary-bg</div>

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

### Text styles

- `primary`
- `secondary`
- `hint`
- `disabled`
- `icon`

### Theme tones

- `background` <div class="theme-example mdc-theme--text-primary-on-background">primary</div> <div class="theme-example mdc-theme--text-secondary-on-background">secondary</div> <div class="theme-example mdc-theme--text-hint-on-background">hint</div> <div class="theme-example mdc-theme--text-disabled-on-background">disabled</div> <div class="theme-example mdc-theme--text-icon-on-background">icon</div>
- `light` <div class="theme-example theme-light mdc-theme--text-primary-on-light">primary</div> <div class="theme-example theme-light mdc-theme--text-secondary-on-light">secondary</div> <div class="theme-example theme-light mdc-theme--text-hint-on-light">hint</div> <div class="theme-example theme-light mdc-theme--text-disabled-on-light">disabled</div> <div class="theme-example theme-light mdc-theme--text-icon-on-light">icon</div>
- `dark` <div class="theme-example theme-dark mdc-theme--text-primary-on-dark">primary</div> <div class="theme-example theme-dark mdc-theme--text-secondary-on-dark">secondary</div> <div class="theme-example theme-dark mdc-theme--text-hint-on-dark">hint</div> <div class="theme-example theme-dark mdc-theme--text-disabled-on-dark">disabled</div> <div class="theme-example theme-dark mdc-theme--text-icon-on-dark">icon</div>
