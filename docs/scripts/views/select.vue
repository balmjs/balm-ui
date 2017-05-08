<template>
  <div>
    <h1>MDC select</h1>
    <section>
      <h2>Fully-Featured Component</h2>
      <section id="demo-wrapper">
        <ui-select2
          :options="provinces"
          :model="formData.province"
          optionKey="key" optionValue="value"
          placeholder="请选择"
          @change="onSelectChange('province', $event, changeCity)"></ui-select2>

        <ui-select2
          :options="cities"
          :model="formData.city"
          optionKey="key" optionValue="value"
          @change="onSelectChange('city', $event)"></ui-select2>

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

        <ui-select multiple group style="height:300px" dark
          :options="groupOptions"
          :model="formData.selected"
          optionKey="key" optionValue="value"
          @change="onSelectChange('selected', $event)"></ui-select> -->
      </section>

      <hr>

      <p>Currently selected: <span id="currently-selected">(none)</span></p>
      <div>
        <input type="checkbox" id="dark-theme">
        <label for="dark-theme">Dark Theme</label>
      </div>
      <div>
        <input type="checkbox" id="rtl">
        <label for="rtl">RTL</label>
      </div>
      <div>
        <input type="checkbox" id="disabled">
        <label for="disabled">Disabled</label>
      </div>
    </section>
    <section>
      <h2>CSS Only</h2>
      <select class="mdc-select">
        <option value="" default selected>Pick a food group</option>
        <option value="grains">Bread, Cereal, Rice, and Pasta</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruit">Fruit</option>
        <option value="dairy">Milk, Yogurt, and Cheese</option>
        <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
        <option value="fats">Fats, Oils, and Sweets</option>
      </select>
    </section>

    <section>
      <h2>Select Multiple - CSS Only</h2>
      <select multiple size="8" class="mdc-multi-select mdc-list">

        <optgroup class="mdc-list-group" label="Fats, Oils, & Sweets">
          <option class="mdc-list-item">ke</option>
          <option class="mdc-list-item">Brown Sugar</option>
          <option class="mdc-list-item">Ice Cream</option>
        </optgroup>
        <option class="mdc-list-divider" role="presentation" disabled />

        <optgroup class="mdc-list-group" label="Dairy">
          <option class="mdc-list-item">Milk</option>
          <option class="mdc-list-item">Cheese</option>
          <option class="mdc-list-item">More Cheese</option>
        </optgroup>

      </select>
    </section>
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
    key: 1,
    value: '海定'
  }, {
    key: 2,
    value: '朝阳'
  }],
  [{
    key: 3,
    value: '黄浦'
  }, {
    key: 4,
    value: '徐汇'
  }],
  []
];

export default {
  mixins: [snippets],
  data() {
    return {
      formData: {
        province: '',
        city: '',
        multipleSelected: [],
        groupSelected: '',
        selected: []
      },
      options: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }, {
        key: 4,
        value: 'item 4'
      }, {
        key: 5,
        value: 'item 5'
      }, {
        key: 6,
        value: 'item 6'
      }, {
        key: 7,
        value: 'item 7'
      }, {
        key: 8,
        value: 'item 8'
      }, {
        key: 9,
        value: 'item 9'
      }, {
        key: 10,
        value: 'item 10'
      }],
      provinces: PROVINCES,
      cities: [],
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
      }, {
        hr: true
      }, {
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
      }]
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
