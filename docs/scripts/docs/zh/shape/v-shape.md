```html
<div v-shape></div>
```

- 圆角形状
  - `v-shape="corner"` (medium)
  - `v-shape.small="corner"`
  - `v-shape.large="corner"`
- 切割形状 (实验性功能，仅支持 Sass 用法)
  - `v-shape.cut="corner"` (medium)
  - `v-shape.cut.small="corner"`
  - `v-shape.cut.large="corner"`

| Value  | Type   | Default | Description                                                                            |
| ------ | ------ | ------- | -------------------------------------------------------------------------------------- |
| corner | string | `''`    | 用于遮盖特定角落的元素；最多可能有 4 个。（值为空时使用 shape sass `radius` variable） |

> 语法类似 CSS `border-radius` 属性

```html
<!-- The syntax of the first corner allows one to four values -->
<!-- Radius is set for all 4 sides -->
<div v-shape="'4px'"></div>

<!-- top-left | bottom-right -->
<div v-shape="'4px 0'"></div>

<!-- top-right | bottom-left -->
<div v-shape="'0 4px'"></div>

<!-- top-left -->
<div v-shape="'4px 0 0'"></div>

<!-- top-left | top-right | bottom-left -->
<div v-shape="'4px 4px 0'"></div>

<!-- top-left | top-right | bottom-right | bottom-left -->
<div v-shape="'4px 4px 4px 4px'"></div>
```
