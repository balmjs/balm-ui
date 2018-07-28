<template>
  <div class="demo--dropdown">
    <section class="hero component">
      <ui-dropdown
        v-model="selected"
        :options="options"
        defaultLabel="Pick a Food Group">
      </ui-dropdown>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import {
  PROVINCES as provinces,
  CITIES,
  OPTIONS as options
} from '../../../data/select';

export default {
  metaInfo: {
    titleTemplate: '%s - Dropdown'
  },
  mixins: [snippets],
  data() {
    return {
      selected: 'grains',
      options,
      formData: {
        province: '',
        city: ''
      },
      provinces,
      cities: []
    };
  },
  methods: {
    onSelected(result) {
      this[`selected${key}`].value = result.value;
      this[`selected${key}`].index = result.index;
    },
    onChangeProvince(value, fn) {
      this.formData.provinces = value;

      let key = value || -1;
      this.cities = key > -1 ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].value : '';
    }
  },
  created() {
    this.showCode('dropdown', 2);
  }
};
</script>
