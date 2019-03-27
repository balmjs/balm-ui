<template>
  <div :class="[$tt('body1'), 'demo--dropdown']">
    <section class="hero component">
      <ui-dropdown v-model="selectedValue" :options="options"></ui-dropdown>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Default dropdown</h6>
        <label>Pick a Food Group:</label>
        <ui-dropdown
          v-model="selected.value"
          :selectedIndex="selected.index"
          :options="options"
          defaultLabel="All"
          :defaultValue="0"
          @selected="$balmUI.onChange('selected', $event)"
        ></ui-dropdown>
        <p>
          Currently selected:
          <span
            id="currently-selected"
          >{{ selected.value ? `${selected.value} at index ${selected.index}` : '(none)' }}</span>
        </p>
        <div class="button-container">
          <ui-button raised @click="$balmUI.onChange('selected.index', 0)">Set Selected Index (0)</ui-button>
        </div>
        <div class="button-container">
          <ui-button raised @click="$balmUI.onChange('selected.value', 'meat')">Set Value to Meat</ui-button>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 Custom dropdown</h6>
        <ui-dropdown
          defaultLabel="Province"
          :options="provinces"
          v-model="formData.province"
          @change="onChangeProvince($event)"
        ></ui-dropdown>

        <ui-dropdown defaultLabel="City" :options="cities" v-model="formData.city"></ui-dropdown>
        Province: {{ formData.province }} - City: {{ formData.city }}
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="dropdown"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="dropdown"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
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
      selectedValue: 'grains',
      selected: {
        value: '',
        index: 0
      },
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
    onChangeProvince(value) {
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
