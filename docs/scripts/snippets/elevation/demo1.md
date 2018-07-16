```html
<section class="demo-surfaces">
  <figure class="demo-surface" v-shadow="0">
    <figcaption>0dp (<code>mdc-elevation--z0</code>)</figcaption>
  </figure>
  <figure v-for="i in 24"
    :key="i"
    class="demo-surface"
    v-shadow="i">
    <figcaption>{{ i }}dp (<code>mdc-elevation--z{{ i }}</code>)</figcaption>
  </figure>
</section>
```
