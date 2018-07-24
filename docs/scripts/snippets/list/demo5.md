```html
<section>
  <h3>Metadata</h3>
  <ui-list class="demo-list">
    <ui-item v-for="i in 3"
      :key="i"
      :lastText="`$${i}0.00`">
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Avatar + Metadata</h3>
  <ui-list avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
    <ui-item v-for="i in 3"
      :key="i"
      firstPlaceholder
      :lastText="`$${i}0.00`">
      Single-line item
    </ui-item>
  </ui-list>
</section>
```
