- `$theme`

  ```ts
  interface VueInstance {
    $theme: BalmUITheme;
  }
  ```

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

  ```ts
  interface BalmUITheme {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onSurface: string;
    onError: string;
  }
  ```

### 2.1.2 Set multiple colors for all theme

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

  interface BalmUITheme {
    colors: ThemeColor;
  }
  ```

### 2.1.3 Get theme color/classname

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

  interface BalmUITheme {
    getThemeColor(style: ThemeColorStyle): string;
  }
  ```

- `$theme.getThemeClass(style)`

  ```ts
  type ThemeClassStyle = ThemeColorStyle | 'primary-bg' | 'secondary-bg';

  interface BalmUITheme {
    getThemeClass(style: ThemeClassStyle): string;
  }
  ```

### 2.2 Text color

```ts
type TextStyle = 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon';

type ThemeTone = 'background' | 'light' | 'dark';
```

#### 2.2.1 Default

- Get text color/class

  ```ts
  interface BalmUITheme {
    getTextColor(style: TextStyle, tone: ThemeTone): string;
    getTextClass(style: TextStyle, tone: ThemeTone): string;
  }
  ```

- Set text color

  ```ts
  interface BalmUITheme {
    setTextColor(style: TextStyle, value: string): void;
  }
  ```

| Param   | Type   | Default        | Description       |
| ------- | ------ | -------------- | ----------------- |
| `style` | string | `''`           | Text style name.  |
| `tone`  | string | `'background'` | Theme tone name.  |
| `value` | string | `''`           | Text color value. |

#### 2.2.2 Light or Dark

- Get text color/class

  ```ts
  interface BalmUITheme {
    getTextColorOnLight(style: TextStyle): string;
    getTextClassOnLight(style: TextStyle): string;

    getTextColorOnDark(style: TextStyle): string;
    getTextClassOnDark(style: TextStyle): string;
  }
  ```

- Set text color

  ```ts
  interface BalmUITheme {
    setTextColorOnLight(style: TextStyle, value: string): void;
    setTextColorOnDark(style: TextStyle, value: string): void;
  }
  ```

| Param   | Type   | Default | Description       |
| ------- | ------ | ------- | ----------------- |
| `style` | string | `''`    | Text style name.  |
| `value` | string | `''`    | Text color value. |

### Use `$theme` without `.vue` component

> New in 8.1.0

```js
import { useTheme } from 'balm-ui';
// OR
// import { useTheme } from 'balm-ui/plugins/theme';

const $theme = useTheme();
```
