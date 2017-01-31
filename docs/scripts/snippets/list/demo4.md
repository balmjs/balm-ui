```html
<ui-list class="demo-list-control">
  <ui-item v-for="(item, index) in items">
    <template scope="props">
      <i :class="props.className.avatar">{{ item.avatar }}</i>
      {{ item.name }}
    </template>
    <template slot="action" scope="props">
      <span :class="props.className.action">
        <ui-checkbox v-if="index === 0" :value="item.id" :model="item.value" effect></ui-checkbox>
        <ui-radio v-if="index === 1" :value="item.id" :model="item.value" effect></ui-radio>
        <ui-switch v-if="index === 2" :value="true" :model="item.value" effect></ui-switch>
      </span>
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
        value: true
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        value: 0
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        value: true
      }]
    };
  }
};
```
