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

- `$theme.colors = themeColor`

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
```

### 2.1.3 Get theme color/classname

- Theme styles
  - `primary`
  - `secondary`
  - `background`
  - `surface`
  - `error`
  - `on-primary`
  - `on-secondary`
  - `on-surface`
  - `on-error`
  - `primary-bg` (only for `getThemeClass`)
  - `secondary-bg` (only for `getThemeClass`)

```js
$theme.getThemeColor(style);
$theme.getThemeClass(style);
```

### 2.2 Text color

- Text styles
  - `primary`
  - `secondary`
  - `hint`
  - `disabled`
  - `icon`
- Theme tones
  - `background`
  - `light`
  - `dark`

#### 2.2.1 Default

```js
$theme.getTextColor(style, tone);
$theme.getTextClass(style, tone);
```

```js
$theme.setTextColor(style, value);
```

| Param   | Type   | Default        | Description       |
| ------- | ------ | -------------- | ----------------- |
| `style` | String | `''`           | Text style name.  |
| `tone`  | String | `'background'` | Theme tone name.  |
| `value` | String | `''`           | Text color value. |

#### 2.2.2 Light or Dark

```js
$theme.getTextColorOnLight(style);
$theme.getTextClassOnLight(style);

$theme.getTextColorOnDark(style);
$theme.getTextClassOnDark(style);
```

```js
$theme.setTextColorOnLight(style, value);
$theme.setTextColorOnDark(style, value);
```

| Param   | Type   | Default | Description       |
| ------- | ------ | ------- | ----------------- |
| `style` | String | `''`    | Text style name.  |
| `value` | String | `''`    | Text color value. |

### Use `$theme` without `.vue` component

> New in 8.1.0

```js
import { useTheme } from 'balm-ui';
// OR
// import { useTheme } from 'balm-ui/plugins/theme';

const $theme = useTheme();
```
