<template>
  <div class="demo--select">
    <section class="hero">
      <ui-select id="my-select"
        v-model="selected"
        :options="options1">
        Pick a Food Group
      </ui-select>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">Fully-Featured JS Component</h2>
      <section id="demo-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-select id="full-func-js-select"
          placeholder
          v-model="selected1.value"
          :selectedIndex="selected1.index"
          :options="options1"
          :class="{'demo-select-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          @selected="onSelected($event, 1)">
          Food Group
        </ui-select>
      </section>
      <p>
        Currently selected:
        <span id="currently-selected">
          {{ selected1.value ? `${selected1.value} at index ${selected1.index}` : '(none)' }}
        </span>
      </p>
      <ui-select-controls v-model="controls"></ui-select-controls>
      <div class="button-container">
        <ui-button raised id="set-selected-index-zero-button"
          @click="balmUI.onChange('selected1.index', 0)">
          Set Selected Index (0)
        </ui-button>
      </div>
      <div class="button-container">
        <ui-button raised id="set-value-meat-button"
          @click="balmUI.onChange('selected1.value', 'meat')">
          Set Value to Meat
        </ui-button>
      </div>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">Select box</h2>
      <section id="box-demo-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-select id="select-box"
          box
          placeholder
          v-model="selected2.value"
          :selectedIndex="selected2.index"
          :options="options2"
          :class="{'demo-select-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          @selected="onSelected($event, 2)">
          Food Group
        </ui-select>
      </section>
      <p>
        Currently selected:
        <span id="box-currently-selected">
          {{ selected2.value ? `${selected2.value} at index ${selected2.index}` : '(none)' }}
        </span>
      </p>
      <ui-select-controls idPrefix="box" v-model="controls"></ui-select-controls>
      <div class="button-container">
        <ui-button raised id="box-set-selected-index-zero-button"
          @click="balmUI.onChange('selected2.index', 0)">
          Set Selected Index (0)
        </ui-button>
      </div>
      <div class="button-container">
        <ui-button raised id="box-set-value-fruit-roll-up-button"
          @click="balmUI.onChange('selected2.value', 'fruit-roll-ups')">
          Set Value to Fruit Roll Ups
        </ui-button>
      </div>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">Outlined Select</h2>
      <section :dir="controls.rtl ? 'rtl' : false">
        <ui-select id="outlined-select"
          outlined
          placeholder
          v-model="selected1.value"
          :selectedIndex="selected1.index"
          :options="options1"
          :class="{'demo-select-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          @selected="onSelected($event, 1)">
          Food Group
        </ui-select>
      </section>
      <p>
        Currently selected:
        <span id="currently-selected-outline">
          {{ selected1.value ? `${selected1.value} at index ${selected1.index}` : '(none)' }}
        </span>
      </p>
      <ui-select-controls idPrefix="outline" v-model="controls"></ui-select-controls>
      <div class="button-container">
        <ui-button raised id="set-selected-index-zero-button-outline"
          @click="balmUI.onChange('selected1.index', 0)">
          Set Selected Index (0)
        </ui-button>
      </div>
      <div class="button-container">
        <ui-button raised id="set-value-meat-button-outline"
          @click="balmUI.onChange('selected1.value', 'meat')">
          Set Value to Meat
        </ui-button>
      </div>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">Pre-selected option via HTML</h2>
      <section>
        <ui-select id="select-preselected"
          v-model="selected3"
          :options="options2">
          Food Group
        </ui-select>
      </section>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">MDC Select with optgroups</h2>
      <ui-select id="select-preselected"
        group
        v-model="selected4"
        :options="options3">
        Food Group
      </ui-select>
    </section>

    <section class="example">
      <ui-select
        placeholder
        defaultLabel="Province"
        :options="provinces"
        v-model="formData.province"
        @change="onSelectChange('province', $event, changeCity)"></ui-select>

      <ui-select
        :placeholder="!cities.length"
        defaultLabel="City"
        :options="cities"
        v-model="formData.city"
        @change="onSelectChange('city', $event)"></ui-select>
    </section>

    <!-- <ui-apidoc name="select"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiSelectControls from '../../components/select-controls';

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
  components: {
    UiSelectControls
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
    onSelected(result, key) {
      this[`selected${key}`].value = result.value;
      this[`selected${key}`].index = result.index;
    },
    onSelectChange(field, value, fn) {
      this.formData[field] = value;

      let key = value || -1;
      fn && fn(key);
    },
    changeCity(key) {
      this.cities = key > -1 ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].value : '';
    }
  },
  created() {
    // this.showCode('select', 2);
  }
};
</script>
