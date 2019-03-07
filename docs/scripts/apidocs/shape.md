```html
<div v-shape></div>
```

- `v-shape`
- `v-shape="corner"`

| Value  | Type   | Default | Description                                                  |
| ------ | ------ | ------- | ------------------------------------------------------------ |
| corner | string | `null`  | Element for masking a specific corner; there may be up to 4. |

> Syntax is similar to CSS `border-radius` property.

```html
<!-- The syntax of the first corner allows one to four values -->
<!-- Corner is set for all 4 sides -->
<div v-shape></div>
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
