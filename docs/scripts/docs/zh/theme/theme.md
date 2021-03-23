- `$theme`

  ```ts
  interface VueInstance {
    $theme: BalmUIThemeObject;
  }
  ```

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

  ```ts
  interface $theme {
    primary(color: string): void;
    secondary(color: string): void;
    background(color: string): void;
    surface(color: string): void;
    error(color: string): void;
    onPrimary(color: string): void;
    onSecondary(color: string): void;
    onSurface(color: string): void;
    onError(color: string): void;
  }
  ```

### 2.1.2 批量设置主题色

- `$theme.colors`

  ```ts
  type ThemeColor = {
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

  interface $theme {
    colors(color: ThemeColor): void;
  }
  ```

### 2.1.3 获取主题色值/class

- `$theme.getThemeColor(style)`

  ```ts
  type ThemeColorStyle =
    | 'primary'
    | 'secondary'
    | 'background'
    | 'surface'
    | 'error'
    | 'on-primary'
    | 'on-secondary'
    | 'on-surface'
    | 'on-error';

  interface $theme {
    getThemeColor(style: ThemeColorStyle): string;
  }
  ```

- `$theme.getThemeClass(style)`

  ```ts
  type ThemeClassStyle = ThemeColorStyle | 'primary-bg' | 'secondary-bg';

  interface $theme {
    getThemeClass(style: ThemeClassStyle): string;
  }
  ```

### 2.2 文字颜色（前景色）

```ts
type TextStyle = 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon';

type ThemeTone = 'background' | 'light' | 'dark';
```

#### 2.2.1 默认

- 获取文字颜色值/class

  ```ts
  interface $theme {
    getTextColor(style: TextStyle, tone: ThemeTone): string;
    getTextClass(style: TextStyle, tone: ThemeTone): string;
  }
  ```

- 设置文字颜色

  ```ts
  interface $theme {
    setTextColor(style: TextStyle, value: string): void;
  }
  ```

| Param   | Type   | Default        | Description |
| ------- | ------ | -------------- | ----------- |
| `style` | string | `''`           | 文字样式名  |
| `tone`  | string | `'background'` | 主题色调名  |
| `value` | string | `''`           | 文字颜色值  |

#### 2.2.2 明暗色系

- 获取文字颜色值/class

  ```ts
  interface $theme {
    getTextColorOnLight(style: TextStyle): string;
    getTextClassOnLight(style: TextStyle): string;

    getTextColorOnDark(style: TextStyle): string;
    getTextClassOnDark(style: TextStyle): string;
  }
  ```

- 设置文字颜色

  ```ts
  interface $theme {
    setTextColorOnLight(style: TextStyle, value: string): void;
    setTextColorOnDark(style: TextStyle, value: string): void;
  }
  ```

| Param   | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `style` | string | `''`    | 文字样式名  |
| `value` | string | `''`    | 文字颜色值  |

### 在非 `.vue` 组件中使用 `$theme`

> New in 8.1.0

```js
import { useTheme } from 'balm-ui';
// 或
// import { useTheme } from 'balm-ui/plugins/theme';

const $theme = useTheme();
```
