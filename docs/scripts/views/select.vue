<template>
  <div class="demo-select">
    <div class="component-title">
      <h3>Select</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-select :options="options" :model="formData.selected"
          defaultValue="All items" defaultKey="0"
          @change="onSelectChange('selected', $event)"></ui-select>
        selected: {{ formData.selected }}
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-select :options="provinces" :model="formData.province"
          placeholder="Select province..."
          @change="onSelectChange('province', $event, changeCity)"></ui-select>
      </div>
      <div class="snippet-demo">
        <ui-select :options="cities" :model="formData.city"
          placeholder="Select city..."
          @change="onSelectChange('city', $event)"></ui-select>
        Province: {{ formData.province }} - City: {{ formData.city }}
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo">
        <p v-if="!edit">
          {{ formData.selected }}
          <ui-button effect @click.native="onEdit">Edit</ui-button>
        </p>
        <p v-if="edit">
          <ui-select :options="options" :model="formData.selected"
            placeholder="Select..."
            @change="onSelectChange('selected', $event)"></ui-select>
          <ui-button effect @click.native="onCancel">Cancel</ui-button>
        </p>
      </div>
    </div>

    <ui-apidoc name="select"></ui-apidoc>
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
      edit: false,
      formData: {
        selected: 0,
        province: 0,
        city: 0
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
      cities: []
    };
  },
  methods: {
    onSelectChange(field, option, fn) {
      let key = option.key || -1;

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
