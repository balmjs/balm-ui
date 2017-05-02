<template>
  <div>
    <h1>MDC select</h1>
    <section>
      <h2>Fully-Featured Component</h2>
      <section id="demo-wrapper">
        <ui-select
          :options="provinces"
          :selected="formData.province"
          optionKey="key" optionValue="value"
          @change="onSelectChange('province', $event, changeCity)"></ui-select>

        <ui-select
          :options="cities"
          :selected="formData.city"
          optionKey="key" optionValue="value"
          @change="onSelectChange('city', $event)"></ui-select>

        <ui-select multiple style="height:100px"
          :options="options"
          :selected="formData.selected"
          optionKey="key" optionValue="value"
          @change="onChange"></ui-select>

        <!-- <ui-select group
          :options="groupOptions"
          :selected="selected"
          optionKey="key" optionValue="value"
          @change="onChange"></ui-select> -->

        <ui-select multiple group style="height:300px"
          :options="groupOptions"
          :selected="selected"
          optionKey="key" optionValue="value"
          @change="onChange"></ui-select>

        <!-- <div class="mdc-select">
          <span class="mdc-select__selected-text">Pick a food group</span>
          <div class="mdc-simple-menu mdc-select__menu">
            <ul class="mdc-list mdc-simple-menu__items">
              <li class="mdc-list-item" role="option" id="grains" aria-disabled="true">
                Pick a food group
              </li>
              <li class="mdc-list-item" role="option" id="grains" tabindex="0">
                Bread, Cereal, Rice, and Pasta
              </li>
              <li class="mdc-list-item" role="option" id="vegetables" tabindex="0">
                Vegetables
              </li>
              <li class="mdc-list-item" role="option" id="fruit" tabindex="0">
                Fruit
              </li>
              <li class="mdc-list-item" role="option" id="dairy" tabindex="0">
                Milk, Yogurt, and Cheese
              </li>
              <li class="mdc-list-item" role="option" id="meat" tabindex="0">
                Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
              </li>
              <li class="mdc-list-item" role="option" id="fats" tabindex="0">
                Fats, Oils, and Sweets
              </li>
            </ul>
          </div>
        </div> -->
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
  mixins: [snippets],
  data() {
    return {
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
      }],
      edit: false,
      formData: {
        selected: [],
        province: 2,
        city: ''
      },
      selected: [],
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
      cities: []
    };
  },
  methods: {
    onChange(value) {
      this.selected = value;
    },
    onSelectChange(field, value, fn) {
      let key = value || -1;

      this.formData[field] = key;
      fn && fn(key);

      if (field === 'province') {
        this.formData.city = (key > -1 && CITIES[key].length) ? CITIES[key][0].key : 0;
      }
    },
    changeCity(key) {
      this.cities = key > -1 ? CITIES[key] : [];
    },
    onEdit() {
      this.edit = true;
    },
    onCancel() {
      this.edit = false;
    }
  },
  created() {
    this.showCode('select', 2);
  }
};
</script>
