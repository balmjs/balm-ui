```html
<section>
  <ui-select id="select-preselected"
    v-model="selected"
    :options="options">
    Food Group
  </ui-select>
</section>
```

```js
const options = [
  {
    label: 'Fruit Roll Ups',
    value: 'fruit-roll-ups'
  },
  {
    label: 'Candy (cotton)',
    value: 'cotton-candy'
  },
  {
    label: 'Vegetables',
    value: 'vegetables'
  },
  {
    label: 'Noodles',
    value: 'noodles'
  }
];

export default {
  data() {
    return {
      options,
      selected: 'fruit-roll-ups'
    };
  }
};
```
