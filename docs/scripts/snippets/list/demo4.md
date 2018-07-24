```html
<section>
  <h3>Avatar List</h3>
  <ui-list avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
    <ui-item v-for="i in 3" :key="i" firstPlaceholder>
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Avatar List (dense)</h3>
  <ui-list avatar dense class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
    <ui-item v-for="i in 3" :key="i" firstPlaceholder>
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Example - Avatar with Text</h3>
  <ui-list avatar dense class="demo-list demo-list--with-avatars">
    <ui-item v-for="(item, index) in items"
      :key="index"
      :firstImage="item.avatar">
      {{ item.name }}
    </ui-item>
  </ui-list>
</section>
```
