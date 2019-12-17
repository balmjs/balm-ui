```html
<ui-select
  defaultLabel="Province"
  :options="provinces"
  v-model="formData.province"
  @change="onChangeProvince($event)"
></ui-select>

<ui-select
  defaultLabel="City"
  :options="cities"
  v-model="formData.city"
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
      label: '海定'
    },
    {
      value: 12,
      label: '朝阳'
    }
  ],
  [
    {
      value: 21,
      label: '黄浦'
    },
    {
      value: 22,
      label: '徐汇'
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
