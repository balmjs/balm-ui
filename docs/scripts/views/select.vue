<template>
  <div class="demo--select">
    <section class="hero">
      <ui-select2 :options="options"
        optionKey="key"
        optionValue="value"
        placeholder="Pick a food group"></ui-select2>
    </section>

    <section class="example">
      <h2>Fully-Featured Component</h2>
      <section id="demo-wrapper">
        <ui-select2 :options="options"
          optionKey="key"
          optionValue="value"
          placeholder="Pick a food group"
          @change="balmUI.onChange('formData.selected', $event)"></ui-select2>
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
    </section>

    <!-- <ui-select2
          :options="provinces"
          :model="formData.province"
          optionKey="key" optionValue="value"
          placeholder="请选择"
          @change="onSelectChange('province', $event, changeCity)"></ui-select2>

        <ui-select2
          :options="cities"
          :model="formData.city"
          optionKey="key" optionValue="value"
          @change="onSelectChange('city', $event)"></ui-select2> -->

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
import snippets from '../mixins/snippets';

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
    key: 11,
    value: '海定'
  }, {
    key: 12,
    value: '朝阳'
  }],
  [{
    key: 21,
    value: '黄浦'
  }, {
    key: 22,
    value: '徐汇'
  }],
  []
];

export default {
  mixins: [snippets],
  data() {
    return {
      options: [{
        key: 1,
        value: 'Bread, Cereal, Rice, and Pasta'
      }, {
        key: 2,
        value: 'Vegetables',
        disabled: true
      }, {
        key: 3,
        value: 'Fruit'
      }, {
        key: 4,
        value: 'Milk, Yogurt, and Cheese'
      }, {
        key: 5,
        value: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts'
      }, {
        key: 6,
        value: 'Fats, Oils, and Sweets'
      }],
      formData: {
        selected: '',
        province: '',
        city: '',
        multipleSelected: [],
        groupSelected: ''
      },
      groupOptions: [{
        label: 'Fats, Oils, & Sweets',
        items: [{
          key: 1,
          value: 'Olive Oil'
        }, {
          key: 2,
          value: 'Brown Sugar'
        }, {
          key: 3,
          value: 'Ice Cream'
        }]
      }, '-', {
        label: 'Dairy',
        items: [{
          key: 4,
          value: 'Milk'
        }, {
          key: 5,
          value: 'Cheese'
        }, {
          key: 6,
          value: 'More Cheese'
        }]
      }],
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
