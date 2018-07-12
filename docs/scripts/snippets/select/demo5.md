```html
<ui-select id="select-optgroups"
  group
  v-model="selected"
  :options="options">
  Food Group
</ui-select>
```

```js
const options = [
  {
    label: 'Meats',
    items: [
      {
        label: 'Steak',
        value: 'steak'
      },
      {
        label: 'Hamburger',
        value: 'hamburger'
      }
    ]
  },
  {
    label: 'Vegetables',
    items: [
      {
        label: 'Beet',
        value: 'beet'
      },
      {
        label: 'Carrot',
        value: 'carrot'
      }
    ]
  }
];

export default {
  data() {
    return {
      options,
      selected: 'steak'
    };
  }
};
```
