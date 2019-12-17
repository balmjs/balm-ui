```html
<ui-chips type="choice" v-model="selectedIndex">
  <ui-chip
    v-if="choiceList.length"
    v-for="(item, index) in choiceList"
    :key="index"
  >
    {{ item }}
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
