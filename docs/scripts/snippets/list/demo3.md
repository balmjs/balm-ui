```html
<section>
  <h3>Graphic</h3>
  <ui-list class="demo-list demo-list--icon-placeholders">
    <ui-item v-for="i in 3" :key="i" firstPlaceholder>
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Graphic (dense)</h3>
  <ui-list dense class="demo-list demo-list--icon-placeholders">
    <ui-item v-for="i in 3" :key="i" firstPlaceholder>
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Graphic Example - Icon with Text</h3>
  <ui-list class="demo-list">
    <ui-item v-for="(item, index) in items"
      :key="index"
      :firstIcon="item.icon">
      {{ item.text }}
    </ui-item>
  </ui-list>
</section>
```
