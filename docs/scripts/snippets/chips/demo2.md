```html
<ui-chips type="choice" v-model="selectedIndex">
  <ui-chip v-for="(item, index) in choiceList" :key="index" class="demo-chip">
    <ui-chip-text>{{ item }}</ui-chip-text>
  </ui-chip>
</ui-chips>
```

```js
export default {
  data() {
    return {
      selectedIndex: 2,
      choiceList: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
    };
  }
};
```
