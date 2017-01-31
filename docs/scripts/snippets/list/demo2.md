```html
<ui-list class="demo-list-icon">
  <ui-item v-for="item in items">
    <template scope="props">
      <i :class="props.className.icon">person</i>
      {{ item }}
    </template>
  </ui-item>
</ui-list>
```

```js
export default {
  data() {
    return {
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ]
    };
  }
};
```
