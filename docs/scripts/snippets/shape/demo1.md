```scss
// Edit `/path/to/project/app/styles/global/_vendor.scss`
@use '@material/shape' with (
  $small-component-radius: 4px,
  $medium-component-radius: 16px,
  $large-component-radius: 24px
);
```

```html
<div class="demo"></div>
<div class="demo" v-shape.small="'1'"></div>
<div class="demo" v-shape="'1 0'"></div>
<div class="demo" v-shape.large="'1 0 0'"></div>
```
