```html
<ui-select :options="provinces" :model="province"
  placeholder="Select province..."
  @change="onSelectChange('province', $event, changeCity)"></ui-select>

<ui-select :options="cities" :model="city"
  placeholder="Select city..."
  @change="onSelectChange('city', $event)"></ui-select>
```

```js
const PROVINCES = [{
  key: 1,
  value: 'Beijing'
}, {
  key: 2,
  value: 'Shanghai'
}, {
  key: 3,
  value: 'Guangzhou'
}];

const CITIES = [
  [],
  [{
    key: 1,
    value: 'Haiding'
  }, {
    key: 2,
    value: 'Chaoyang'
  }],
  [{
    key: 3,
    value: 'Huangpu'
  }, {
    key: 4,
    value: 'Xuhui'
  }],
  []
];

export default {
  data() {
    return {
      province: 0,
      city: 0,
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    onSelectChange(field, option, fn) {
      let key = option.key || -1;

      this[field] = key;
      fn && fn(key);

      if (field === 'province') {
        this.city = (key > -1 && CITIES[key].length) ? CITIES[key][0].key : 0;
      }
    },
    changeCity(key) {
      this.cities = key > -1 ? CITIES[key] : [];
    }
  }
};
```
