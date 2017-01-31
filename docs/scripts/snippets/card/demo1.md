```html
<ui-card class="demo-card-wide" border hasMenu>
  <template slot="header" scope="props">
    <h2 :class="props.className.title">Welcome</h2>
  </template>
  <template scope="props">
    <div :class="props.className.text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
    </div>
  </template>
  <template slot="footer">
    <ui-button colored effect>Get Started</ui-button>
  </template>
  <template slot="menu">
    <ui-button icon="share" effect></ui-button>
  </template>
</ui-card>
```
