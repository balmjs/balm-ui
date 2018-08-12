```html
<section>
  <h3>Example - Two-line Avatar + Text + Icon</h3>
  <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
    <ui-item v-for="(item, index) in folders"
      :key="index"
      :firstIcon="item.first"
      :lastIcon="item.last">
      <ui-item-text>{{ item.text }}</ui-item-text>
      <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
    </ui-item>
  </ui-list>
</section>
```
