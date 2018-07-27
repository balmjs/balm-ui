<template>
  <div class="demo--dropdown">
    <section class="hero component">
      <ui-dropdown
        v-model="selected"
        :options="options1"
        defaultLabel="Pick a Food Group"
        @selected="onSelected">
      </ui-dropdown>
    </section>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

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
  []
];

const options1 = [
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

const options2 = [
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

const options3 = [
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
  metaInfo: {
    titleTemplate: '%s - Dropdown'
  },
  mixins: [snippets],
  data() {
    return {
      selected: 'grains',
      selected1: {
        value: '',
        index: 0
      },
      selected2: {
        value: '',
        index: 0
      },
      selected3: 'fruit-roll-ups',
      selected4: 'steak',
      options1,
      options2,
      options3,
      controls: {
        rtl: false,
        customColor: false,
        disabled: false
      },
      formData: {
        province: '',
        city: ''
      },
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    onSelected(result) {
      // console.log('onSelected', result);
      // this[`selected${key}`].value = result.value;
      // this[`selected${key}`].index = result.index;
    },
    onChangeProvince(value, fn) {
      this.formData.provinces = value;

      let key = value || -1;
      this.cities = key > -1 ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].value : '';
    }
  },
  created() {
    this.showCode('select', 6);
  }
};
</script>

