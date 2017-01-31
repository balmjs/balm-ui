```html
<ui-list class="demo-list-action">
  <ui-item v-for="item in items">
    <template scope="props">
      <i :class="props.className.avatar">person</i>
      {{ item }}
    </template>
    <template slot="action" scope="props">
      <a :class="props.className.action" href="#">
        <i class="material-icons">star</i>
      </a>
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
