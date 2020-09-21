```html
<section :dir="controls.rtl ? 'rtl' : null">
  <ui-select
    id="full-func-js-select"
    v-model="selected"
    :options="options"
    :class="{ 'demo-select-custom-colors': controls.customColor }"
    :disabled="controls.disabled"
    @selected="onSelected($event)"
  >
    Food Group
  </ui-select>
</section>
```

```js
const options = [
  {
    label: 'Bread, Cereal, Rice, and Pasta',
    value: 'grains'
  },
  {
    label: 'Vegetables',
    value: 'vegetables',
    disabled: true
  },
  {
    label: 'Fruit',
    value: 'fruit'
  },
  {
    label: 'Milk, Yogurt, and Cheese',
    value: 'dairy'
  },
  {
    label: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts',
    value: 'meat'
  },
  {
    label: 'Fats, Oils, and Sweets',
    value: 'fats'
  }
];

export default {
  data() {
    return {
      options,
      selected: '',
      controls: {
        rtl: false,
        customColor: false,
        disabled: false
      }
    };
  },
  methods: {
    onSelected(selected) {
      this.selected = selected.value;
    }
  }
};
```
