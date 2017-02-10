```html
<!-- Basic Chip -->
<ui-chip>Basic Chip</ui-chip>
```

```html
<!-- Deletable Chip -->
<ui-chip action>
  Deletable Chip
  <template slot="action" scope="props">
    <span :class="props.className">
      <i class="material-icons">cancel</i>
    </span>
  </template>
</ui-chip>
```
