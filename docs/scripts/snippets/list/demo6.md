```html
<ui-list class="demo-list-three" threeLine>
  <ui-item v-for="(item, index) in items2">
    <template scope="props">
      <i :class="props.className.avatar">{{ item.avatar }}</i>
      <span>{{ item.name }}</span>
      <span :class="props.className.text">{{ item.text }}</span>
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
      items: [{
        id: 1,
        avatar: 'person',
        name: 'Bryan Cranston',
        text: 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.'
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.'
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".'
      }]
    };
  }
};
```
