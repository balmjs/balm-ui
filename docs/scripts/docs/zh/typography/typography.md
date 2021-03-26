- `$tt(style)`

  ```ts
  type TypographyStyle =
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'headline6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | string;

  interface VueInstance {
    $tt(style: TypographyStyle): string;
  }
  ```

| Param   | Type   | Default | Description                  |
| ------- | ------ | ------- | ---------------------------- |
| `style` | string | `''`    | 排版样式名或自定义样式 class |

MDC Web 默认提供了 13 种样式：

| Style       | Description                                          |
| ----------- | ---------------------------------------------------- |
| `headline1` | 标题 1，屏幕上最大的文本，保留简短，重要的文本或数字 |
| `headline2` | 标题 2                                               |
| `headline3` | 标题 3                                               |
| `headline4` | 标题 4                                               |
| `headline5` | 标题 5                                               |
| `headline6` | 标题 6                                               |
| `subtitle1` | 副标题 1，比标题小，保留给长度较短的中强调文字       |
| `subtitle2` | 副标题 2                                             |
| `body1`     | 主体内容 1，用于长篇写作                             |
| `body2`     | 主体内容 2                                           |
| `caption`   | 注释文字                                             |
| `button`    | 按钮文字                                             |
| `overline`  | 说明文字                                             |

> 你可以很容易为你的项目重写排版样式（CSS Classes）

### 在非 `.vue` 组件中使用 `$tt`

> New in 8.1.0

```js
import { useTypography } from 'balm-ui';
// 或
// import { useTypography } from 'balm-ui/plugins/typography';

const $tt = useTypography();
console.log($tt('custom-style-1'));
```
