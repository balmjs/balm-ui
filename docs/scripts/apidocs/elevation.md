```html
<div v-shadow="4"></div>
```

#### Default elevation

- `v-shadow="z"`

| Value | Type     | Default | Description                                         |
| ----- | -------- | ------- | --------------------------------------------------- |
| z     | `Number` | `0`     | Sets the elevation to the (N)dp, where 1 <= N <= 24 |

#### Transition elevation

- `v-shadow.transition="[z1, z2]"`

Applies the correct css rules to transition an element between elevations:

```
z1: default class
z2: hover class
```
