```html
<section>
  <h3>Example - Avatar with Text and Icon</h3>
  <ui-list avatar class="demo-list demo-list--with-avatars demo-list--avatar-and-meta-icon">
    <ui-item v-for="(item, index) in items"
      :key="index"
      :firstImage="item.avatar"
      :lastIcon="item.favorite ? 'favorite' : 'favorite_border'">
      {{ item.name }}
    </ui-item>
  </ui-list>
</section>
```
