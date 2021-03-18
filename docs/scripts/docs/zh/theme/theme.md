### 2.1 主题颜色（背景色）

### 2.1.1 获取/设置某个主题色

- `$theme.primary`
- `$theme.secondary`
- `$theme.background`
- `$theme.surface`
- `$theme.error`
- `$theme.onPrimary`
- `$theme.onSecondary`
- `$theme.onSurface`
- `$theme.onError`

### 2.1.2 批量设置主题色

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

### 2.1.3 获取主题色值/class

- 主题样式
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

### 2.2 文字颜色（前景色）

- 文字样式
  - `primary`
  - `secondary`
  - `hint`
  - `disabled`
  - `icon`
- 主题色调
  - `background`
  - `light`
  - `dark`

#### 2.2.1 默认

```js
$theme.getTextColor(style, tone);
$theme.getTextClass(style, tone);
```

```js
$theme.setTextColor(style, value);
```

| Param   | Type   | Default        | Description |
| ------- | ------ | -------------- | ----------- |
| `style` | String | `''`           | 文字样式名  |
| `tone`  | String | `'background'` | 主题色调名  |
| `value` | String | `''`           | 文字颜色值  |

#### 2.2.2 明暗色系

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

| Param   | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `style` | String | `''`    | 文字样式名  |
| `value` | String | `''`    | 文字颜色值  |

### 在非 `.vue` 组件中使用 `$theme`

> New in 8.1.0

```js
import { useTheme } from 'balm-ui';
// 或
// import { useTheme } from 'balm-ui/plugins/theme';

const $theme = useTheme();
```
