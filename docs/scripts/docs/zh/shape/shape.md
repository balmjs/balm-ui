```html
<div v-shape></div>
```

- Rounded shapes
  - `v-shape="corner"` (medium)
  - `v-shape.small="corner"`
  - `v-shape.large="corner"`
- Cut shapes (Experimental, Sass Only)
  - `v-shape.cut="corner"` (medium)
  - `v-shape.cut.small="corner"`
  - `v-shape.cut.large="corner"`

| Value  | Type   | Default | Description                                                                                                       |
| ------ | ------ | ------- | ----------------------------------------------------------------------------------------------------------------- |
| corner | string | `''`    | Element for masking a specific corner; there may be up to 4. (Use shape sass radius variable when value is empty) |

> Syntax is similar to CSS `border-radius` property.

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
