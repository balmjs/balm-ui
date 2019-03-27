<template>
  <div :class="[$tt('body1'), 'demo--select']">
    <section class="hero component">
      <ui-select id="my-select" v-model="selected" :options="options1">Pick a Food Group</ui-select>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h6 :class="$tt('headline6')">1.1 Fully-Featured JS Component</h6>
        <section id="demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
          <ui-select
            id="full-func-js-select"
            v-model="selected1.value"
            :selectedIndex="selected1.index"
            :options="options1"
            :class="{'demo-select-custom-colors': controls.customColor}"
            :disabled="controls.disabled"
            @selected="onSelected($event, 1)"
          >Food Group</ui-select>
        </section>
        <p>
          Currently selected:
          <span
            id="currently-selected"
          >{{ selected1.value ? `${selected1.value} at index ${selected1.index}` : '(none)' }}</span>
        </p>
        <ui-select-controls v-model="controls"></ui-select-controls>
        <div class="button-container">
          <ui-button
            raised
            id="set-selected-index-zero-button"
            @click="$balmUI.onChange('selected1.index', 0)"
          >Set Selected Index (0)</ui-button>
        </div>
        <div class="button-container">
          <ui-button
            raised
            id="set-value-meat-button"
            @click="$balmUI.onChange('selected1.value', 'meat')"
          >Set Value to Meat</ui-button>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.2 Select box</h6>
        <section id="box-demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
          <ui-select
            id="select-box"
            box
            v-model="selected2.value"
            :selectedIndex="selected2.index"
            :options="options2"
            :class="{'demo-select-custom-colors': controls.customColor}"
            :disabled="controls.disabled"
            @selected="onSelected($event, 2)"
          >Food Group</ui-select>
        </section>
        <p>
          Currently selected:
          <span
            id="box-currently-selected"
          >{{ selected2.value ? `${selected2.value} at index ${selected2.index}` : '(none)' }}</span>
        </p>
        <ui-select-controls idPrefix="box" v-model="controls"></ui-select-controls>
        <div class="button-container">
          <ui-button
            raised
            id="box-set-selected-index-zero-button"
            @click="$balmUI.onChange('selected2.index', 0)"
          >Set Selected Index (0)</ui-button>
        </div>
        <div class="button-container">
          <ui-button
            raised
            id="box-set-value-fruit-roll-up-button"
            @click="$balmUI.onChange('selected2.value', 'fruit-roll-ups')"
          >Set Value to Fruit Roll Ups</ui-button>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.3 Outlined Select</h6>
        <section :dir="controls.rtl ? 'rtl' : null">
          <ui-select
            id="outlined-select"
            outlined
            v-model="selected1.value"
            :selectedIndex="selected1.index"
            :options="options1"
            :class="{'demo-select-custom-colors': controls.customColor}"
            :disabled="controls.disabled"
            @selected="onSelected($event, 1)"
          >Food Group</ui-select>
        </section>
        <p>
          Currently selected:
          <span
            id="currently-selected-outline"
          >{{ selected1.value ? `${selected1.value} at index ${selected1.index}` : '(none)' }}</span>
        </p>
        <ui-select-controls idPrefix="outline" v-model="controls"></ui-select-controls>
        <div class="button-container">
          <ui-button
            raised
            id="set-selected-index-zero-button-outline"
            @click="$balmUI.onChange('selected1.index', 0)"
          >Set Selected Index (0)</ui-button>
        </div>
        <div class="button-container">
          <ui-button
            raised
            id="set-value-meat-button-outline"
            @click="$balmUI.onChange('selected1.value', 'meat')"
          >Set Value to Meat</ui-button>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.4 Pre-selected option via HTML</h6>
        <section>
          <ui-select id="select-preselected" v-model="selected3" :options="options2">Food Group</ui-select>
        </section>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.5 MDC Select with optgroups</h6>
        <ui-select id="select-optgroups" group v-model="selected4" :options="options3">Food Group</ui-select>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[5]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.6 Custom Select</h6>
        <ui-select
          defaultLabel="Province"
          :options="provinces"
          v-model="formData.province"
          @change="onChangeProvince($event)"
        ></ui-select>

        <ui-select defaultLabel="City" :options="cities" v-model="formData.city"></ui-select>
        Province: {{ formData.province }} - City: {{ formData.city }}
      </section>
      <ui-accordion>
        <ui-markdown :code="code[6]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="select"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="select"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import UiSelectControls from '../../components/select-controls';
import {
  PROVINCES as provinces,
  CITIES,
  OPTIONS as options1
} from '../../../data/select';

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
    titleTemplate: '%s - Select'
  },
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
      provinces,
      cities: []
    };
  },
  methods: {
    onSelected(result, key) {
      this[`selected${key}`].value = result.value;
      this[`selected${key}`].index = result.index;
    },
    onChangeProvince(value) {
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
