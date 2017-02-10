```html
<!-- Contact Chip -->
<ui-chip icon>
  <template slot="icon" scope="props">
    <span :class="[props.className, 'mdl-color--teal', 'mdl-color-text--white']">A</span>
  </template>
  Contact Chip
</ui-chip>
```

```html
<!-- Deletable Contact Chip -->
<ui-chip icon action>
  <template slot="icon" scope="props">
    <img :class="props.className" :src="avatar" alt="">
  </template>
  Deletable Contact Chip
  <template slot="action" scope="props">
    <span :class="props.className">
      <i class="material-icons">cancel</i>
    </span>
  </template>
</ui-chip>
```
