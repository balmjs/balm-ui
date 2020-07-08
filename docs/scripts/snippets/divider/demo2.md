```html
<ui-divider type="|" class="vertical-divider-demo">
  <template #left>
    <div class="block red"></div>
  </template>
  or
  <template #right>
    <div class="block blue"></div>
  </template>
</ui-divider>
```

```css
.vertical-divider-demo {
  width: 300px;
  height: 120px;
  padding: 10px;
  border: 1px solid currentColor;

  .block {
    width: 80px;
    height: 80px;
  }
  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
}
```
