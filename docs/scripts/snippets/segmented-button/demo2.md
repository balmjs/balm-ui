```html
<ui-segmented-buttons
  v-model="checkedValue"
  :items="items"
  single-select
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
      checkedValue: -1
    };
  }
};
```
