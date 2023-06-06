```html
<ui-select
  v-model="formData.province"
  :options="provinces"
  default-label="Province"
  @update:model-value="onChangeProvince($event)"
></ui-select>

<ui-select
  v-model="formData.city"
  :options="cities"
  default-label="City"
></ui-select>
```

```js
const PROVINCES = [
  {
    value: 1,
    label: 'Beijing'
  },
  {
    value: 2,
    label: 'Shanghai'
  },
  {
    value: 3,
    label: 'Guangzhou'
  }
];

const CITIES = [
  [],
  [
    {
      value: 11,
      label: 'Haiding'
    },
    {
      value: 12,
      label: 'Chaoyang'
    }
  ],
  [
    {
      value: 21,
      label: 'Huangpu'
    },
    {
      value: 22,
      label: 'Xuhui'
    }
  ],
  [
    {
      value: 31,
      label: 'Guangzhou'
    }
  ]
];

export default {
  data() {
    return {
      provinces: PROVINCES,
      cities: [],
      formData: {
        province: '',
        city: ''
      }
    };
  },
  methods: {
    onChangeProvince(value) {
      this.formData.provinces = value;

      let key = value || -1;
      this.cities = key > -1 ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].value : '';
    }
  }
};
```
