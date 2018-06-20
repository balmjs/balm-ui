<template>
  <div class="demo--select">
    <section class="hero">
      <ui-select id="my-select"
        v-model="selected"
        :options="options">
        Pick a Food Group
      </ui-select>
    </section>

    <section class="example">
      <h2 :class="$tt('headline6')">Fully-Featured JS Component</h2>
      <section id="demo-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-select id="full-func-js-select"
          defaultLabel="Food Group"
          v-model="selected2"
          :options="options"
          :class="{'demo-select-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          @selected="balmUI.onChange('selectedValue', $event)">
        </ui-select>
      </section>
      <p>
        Currently selected:
        <span id="currently-selected">
          {{ selectedValue ? selectedValue.value + ' at index ' + selectedValue.index : '(none)' }}
        </span>
      </p>
      <div>
        <ui-checkbox id="rtl" v-model="controls.rtl">RTL</ui-checkbox>
      </div>
      <div>
        <ui-checkbox id="alternate-colors" v-model="controls.customColor">Alternate Colors</ui-checkbox>
      </div>
      <div>
        <ui-checkbox id="disabled" v-model="controls.disabled">Disabled</ui-checkbox>
      </div>
      <div class="button-container">
        <ui-button raised id="set-selected-index-zero-button">
          Set Selected Index (0)
        </ui-button>
      </div>
      <div class="button-container">
        <ui-button raised id="set-value-meat-button">
          Set Value to Meat
        </ui-button>
      </div>
    </section>

    <!-- <section class="example">
      <h2>Fully-Featured Component</h2>
      <section id="demo-wrapper">
        <ui-selectmenu :options="options"
          optionKey="key"
          optionValue="value"
          placeholder="Pick a food group"
          @change="balmUI.onChange('formData.selected', $event)"></ui-selectmenu>
      </section>
      <p>Currently selected:
        <span id="currently-selected">{{ formData.selected || '(none)'}}</span>
      </p>
    </section>
    <section class="example">
      <h2>CSS Only</h2>
      <ui-select :options="options"
        model=""
        optionKey="key"
        optionValue="value"
        defaultValue="Pick a food group"
        @change="balmUI.onChange('formData.selected', $event)"></ui-select>
    </section>
    <section class="example">
      <h2>Select Multiple - CSS Only</h2>
      <ui-select multiple group size="8"
        :options="groupOptions"
        :model="formData.multipleSelected"
        optionKey="key"
        optionValue="value"
        @change="balmUI.onChange('formData.multipleSelected', $event)"></ui-select>
    </section> -->

    <!-- <ui-selectmenu
          :options="provinces"
          :model="formData.province"
          optionKey="key" optionValue="value"
          placeholder="请选择"
          @change="onSelectChange('province', $event, changeCity)"></ui-selectmenu>

        <ui-selectmenu
          :options="cities"
          :model="formData.city"
          optionKey="key" optionValue="value"
          @change="onSelectChange('city', $event)"></ui-selectmenu> -->

    <!-- <ui-select
          :options="provinces"
          :model="formData.province"
          optionKey="key" optionValue="value"
          @change="onSelectChange('province', $event, changeCity)"></ui-select>

        <ui-select
          :options="cities"
          :model="formData.city"
          optionKey="key" optionValue="value"
          @change="onSelectChange('city', $event)"></ui-select>

        <ui-select multiple style="height:100px"
          :options="options"
          :model="formData.multipleSelected"
          optionKey="key" optionValue="value"
          @change="onSelectChange('multipleSelected', $event)"></ui-select>

        <ui-select group
          :options="groupOptions"
          :model="formData.groupSelected"
          optionKey="key" optionValue="value"
          @change="onSelectChange('groupSelected', $event)"></ui-select>

         -->


    <!-- <ui-apidoc name="select"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

const PROVINCES = [
  {
    key: 1,
    value: 'Beijing'
  },
  {
    key: 2,
    value: 'Shanghai'
  },
  {
    key: 3,
    value: 'Guangzhou'
  }
];

const CITIES = [
  [],
  [
    {
      key: 11,
      value: '海定'
    },
    {
      key: 12,
      value: '朝阳'
    }
  ],
  [
    {
      key: 21,
      value: '黄浦'
    },
    {
      key: 22,
      value: '徐汇'
    }
  ],
  []
];

export default {
  mixins: [snippets],
  data() {
    return {
      selected: 'grains',
      selected2: '',
      options: [
        {
          key: 1,
          label: 'Bread, Cereal, Rice, and Pasta',
          value: 'grains'
        },
        {
          key: 2,
          label: 'Vegetables',
          value: 'vegetables',
          disabled: true
        },
        {
          key: 3,
          label: 'Fruit',
          value: 'fruit'
        },
        {
          key: 4,
          label: 'Milk, Yogurt, and Cheese',
          value: 'dairy'
        },
        {
          key: 5,
          label: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts',
          value: 'meat'
        },
        {
          key: 6,
          label: 'Fats, Oils, and Sweets',
          value: 'fats'
        }
      ],
      selectedValue: null,
      controls: {
        rtl: false,
        customColor: false,
        disabled: false
      },
      formData: {
        selected: '',
        province: '',
        city: '',
        multipleSelected: [],
        groupSelected: ''
      },
      groupOptions: [
        {
          label: 'Fats, Oils, & Sweets',
          items: [
            {
              key: 1,
              value: 'Olive Oil'
            },
            {
              key: 2,
              value: 'Brown Sugar'
            },
            {
              key: 3,
              value: 'Ice Cream'
            }
          ]
        },
        '-',
        {
          label: 'Dairy',
          items: [
            {
              key: 4,
              value: 'Milk'
            },
            {
              key: 5,
              value: 'Cheese'
            },
            {
              key: 6,
              value: 'More Cheese'
            }
          ]
        }
      ],
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    onSelectChange(field, value, fn) {
      this.formData[field] = value;

      let key = value || -1;
      fn && fn(key);
    },
    changeCity(key) {
      this.cities = key > -1 ? CITIES[key] : [];
    }
  },
  created() {
    // this.showCode('select', 2);
  }
};
</script>
