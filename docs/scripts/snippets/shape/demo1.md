```scss
// Edit `/path/to/project/app/styles/global/_vendors.scss`
@use '@material/shape' with (
  $small-component-radius: 4px,
  $medium-component-radius: 16px,
  $large-component-radius: 24px
);
```

```html
<div v-shape.small class="demo">4dp</div>
<div v-shape class="demo">16dp</div>
<div v-shape.large class="demo">24dp</div>
```
