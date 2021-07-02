```html
<ui-icon v-ripple.unbounded class="demo-surface" data-mdc-ripple-is-unbounded>
  favorite
</ui-icon>
```

```html
<ui-icon
  v-ripple:cssOnly.unbounded
  class="demo-surface"
  data-mdc-ripple-is-unbounded
>
  favorite
</ui-icon>
```

```css
.demo-surface[data-mdc-ripple-is-unbounded] {
  /* Override width/height from above to match icon size, and adjust padding for hitbox */
  width: 24px;
  height: 24px;
  padding: 12px;
}
```
