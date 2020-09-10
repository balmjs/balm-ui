### 2.1 Theme color

### 2.1.1 Getters/setters for single theme

- `$theme.primary`
- `$theme.secondary`
- `$theme.background`
- `$theme.surface`
- `$theme.error`
- `$theme.onPrimary`
- `$theme.onSecondary`
- `$theme.onSurface`
- `$theme.onError`

### 2.1.2 Set multiple colors for all theme

```ts
interface themeColor {
  primary?: string;
  secondary?: string;
  background?: string;
  surface?: string;
  error?: string;
  on-primary?: string;
  on-secondary?: string;
  on-surface?: string;
  on-error?: string;
}

$theme.colors = themeColor;
```

### 2.1.3 Get theme color/classname

```js
$theme.getThemeColor(style);
$theme.getThemeClass(style);
```

- Theme styles:
  - `primary`
  - `secondary`
  - `background`
  - `surface`
  - `error`
  - `on-primary`
  - `on-secondary`
  - `on-surface`
  - `on-error`
  - `primary-bg`
  - `secondary-bg`

### 2.2 Text color

#### 2.2.1 Default

```js
$theme.getTextColor(style, tone);
$theme.getTextClass(style, tone);
$theme.setTextColor(style, value);
```

| Param   | Type   | Default        | Description       |
| ------- | ------ | -------------- | ----------------- |
| `style` | String | `''`           | Text style name.  |
| `tone`  | String | `'background'` | Theme tone name.  |
| `value` | String | `''`           | Text color value. |

#### 2.2.1 Light or Dark

```js
$theme.getTextColorOnLight(style);
$theme.getTextClassOnLight(style);
$theme.setTextColorOnLight(style, value);

$theme.getTextColorOnDark(style);
$theme.getTextClassOnDark(style);
$theme.setTextColorOnDark(style, value);
```

| Param   | Type   | Default | Description       |
| ------- | ------ | ------- | ----------------- |
| `style` | String | `''`    | Text style name.  |
| `value` | String | `''`    | Text color value. |

- Text styles:
  - `primary`
  - `secondary`
  - `hint`
  - `disabled`
  - `icon`
- Theme tones
  - `background`
  - `light`
  - `dark`
