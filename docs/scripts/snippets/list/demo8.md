```html
<section>
  <h3>Avatar List</h3>
  <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
    <ui-item v-for="i in 3" :key="i" firstPlaceholder>
      <ui-item-text>Two-line item</ui-item-text>
      <ui-item-subtext>Secondary text</ui-item-subtext>
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Metadata</h3>
  <ui-list twoLine class="demo-list">
    <ui-item v-for="i in 3"
      :key="i"
      :lastText="`$${i}0.00`">
      <ui-item-text>Two-line item</ui-item-text>
      <ui-item-subtext>Secondary text</ui-item-subtext>
    </ui-item>
  </ui-list>
</section>
```
