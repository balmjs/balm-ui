```html
<section>
  <h3>Text only, non-interactive (no states)</h3>
  <ui-list nonInteractive class="demo-list">
    <ui-item v-for="i in 3" :key="i">
      Single-line item
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Text only (dense)</h3>
  <ui-list dense class="demo-list">
    <ui-item v-for="i in 3" :key="i">
      Single-line item
    </ui-item>
  </ui-list>
</section>
```
