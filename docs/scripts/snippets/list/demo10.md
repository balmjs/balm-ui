```html
<section>
    <h3>Full-Width Dividers</h3>
    <ui-list class="demo-list">
      <ui-item v-for="i in 3" :key="i">Single-line item - section 1</ui-item>
      <ui-item-divider></ui-item-divider>
      <ui-item v-for="i in 2" :key="i + 3">Single-line item - section 2</ui-item>
    </ui-list>
  </section>

  <section>
    <h3>Inset Dividers</h3>
    <ui-list avatar class="demo-list demo-list--with-avatars demo-list demo-list--icon-placeholders">
      <ui-item v-for="i in 3" :key="i" firstPlaceholder>
        Single-line item - section 1
      </ui-item>
      <ui-item-divider inset></ui-item-divider>
      <ui-item v-for="i in 2" :key="i + 3" firstPlaceholder>
        Single-line item - section 2
      </ui-item>
    </ui-list>
  </section>
</section>
```
