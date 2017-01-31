```html
<ui-card class="demo-card-square" expand border>
  <template slot="header" scope="props">
    <h2 :class="props.className.title">Update</h2>
  </template>
  <template scope="props">
    <div :class="props.className.text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
    </div>
  </template>
  <template slot="footer">
    <ui-button colored effect>View Updates</ui-button>
  </template>
</ui-card>
```
