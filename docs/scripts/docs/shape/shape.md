```html
<div v-shape></div>
```

- `v-shape="corner"`
- `v-shape.small="corner"`
- `v-shape.large="corner"`

| Value  | Type   | Default | Description                                                  |
| ------ | ------ | ------- | ------------------------------------------------------------ |
| corner | string | `''`    | Element for masking a specific corner; there may be up to 4. |

> Syntax is similar to CSS `border-radius` property.

```html
<!-- The syntax of the first corner allows one to four values -->
<!-- Radius is set for all 4 sides -->
<div v-shape="'1'"></div>

<!-- top-left | bottom-right -->
<div v-shape="'1 0'"></div>

<!-- top-right | bottom-left -->
<div v-shape="'0 1'"></div>

<!-- top-left -->
<div v-shape="'1 0 0'"></div>

<!-- top-left | top-right | bottom-left -->
<div v-shape="'1 1 0'"></div>

<!-- top-left | top-right | bottom-right | bottom-left -->
<div v-shape="'1 1 1 1'"></div>
```
