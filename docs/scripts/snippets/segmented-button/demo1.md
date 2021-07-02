```html
<ui-segmented-buttons
  v-model="checkedValue"
  :items="items"
></ui-segmented-buttons>
```

```js
const items = [
  {
    icon: 'favorite'
  },
  {
    text: 'Sample Text'
  },
  {
    icon: 'favorite',
    text: 'Sample Text'
  }
];

export default {
  data() {
    return {
      items,
      checkedValue: []
    };
  }
};
```
