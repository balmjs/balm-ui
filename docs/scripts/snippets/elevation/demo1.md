```html
<figure v-for="i in 25" :key="i" v-shadow="i - 1" class="demo-surface">
  <figcaption>{{ i - 1 }}dp ( <code>v-shadow="{{ i - 1 }}"</code>)</figcaption>
</figure>
```
