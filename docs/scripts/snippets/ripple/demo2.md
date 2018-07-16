```html
<section class="example">
  <div>
    <h2>Unbounded</h2>
    <ui-icon class="demo-surface" data-mdc-ripple-is-unbounded v-ripple.unbounded>
      favorite
    </ui-icon>
  </div>
  <div>
    <h2>Unbounded - CSS Only</h2>
    <ui-icon class="demo-surface" data-mdc-ripple-is-unbounded v-ripple:cssOnly.unbounded>
      favorite
    </ui-icon>
  </div>
</section>
```

```css
.demo-surface[data-mdc-ripple-is-unbounded] {
  /* Override width/height from above to match icon size, and adjust padding for hitbox */
  width: 24px;
  height: 24px;
  padding: 12px;
}
```
