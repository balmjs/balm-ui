```html
<ui-list class="demo-list-two" twoLine>
  <ui-item v-for="(item, index) in items2">
    <template scope="props">
      <i :class="props.className.avatar">{{ item.avatar }}</i>
      <span>{{ item.name }}</span>
      <span :class="props.className.subtitle">62 Episodes</span>
    </template>
    <template slot="action" scope="props">
      <span v-if="item.info" :class="props.className.info">{{ item.info }}</span>
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
      items: [{
        id: 1,
        avatar: 'person',
        name: 'Bryan Cranston',
        info: 'Actor'
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul'
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk'
      }]
    };
  }
};
```
