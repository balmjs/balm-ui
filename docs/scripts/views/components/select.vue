<template>
  <docs-page
    name="select"
    demo-count="4"
    :apis="['select', 'select-helper', 'select-icon']"
  >
    <template #hero>
      <div class="hero-demo">
        <div>
          <template v-if="typeOption === 0">
            <ui-select
              id="my-select"
              v-model="selected"
              :options="options"
              :with-leading-icon="selectOption.includes(1)"
              helper-text-id="my-helper-text1"
            >
              <template v-if="selectOption.includes(1)" #icon>
                <ui-select-icon>face</ui-select-icon>
              </template>
              <template #dropdown-icon="{ iconClass }">
                <ui-icon :class="iconClass">keyboard_arrow_down</ui-icon>
              </template>
              Pick a fruit
            </ui-select>
            <ui-select-helper
              id="my-helper-text1"
              :visible="selectOption.includes(2)"
              :valid-msg="selectOption.includes(3)"
            >
              Helper text
            </ui-select-helper>
          </template>
        </div>
        <div>
          <template v-if="typeOption === 1">
            <ui-select
              id="my-select"
              v-model="selected"
              outlined
              :options="options"
              :with-leading-icon="selectOption.includes(1)"
              helper-text-id="my-helper-text2"
            >
              <template v-if="selectOption.includes(1)" #icon>
                <ui-select-icon>face</ui-select-icon>
              </template>
              Pick a fruit
            </ui-select>
            <ui-select-helper
              id="my-helper-text2"
              :visible="selectOption.includes(2)"
              :valid-msg="selectOption.includes(3)"
            >
              Helper text
            </ui-select-helper>
          </template>
        </div>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <ui-form class="hero-option">
          <ui-form-field>
            <ui-checkbox
              v-model="selectOption"
              input-id="with-leading-icon"
              :value="1"
            ></ui-checkbox>
            <label for="with-leading-icon">Leading Icon</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              v-model="selectOption"
              input-id="with-helper-text"
              :value="2"
            ></ui-checkbox>
            <label for="with-helper-text">Helper Text</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              v-model="selectOption"
              input-id="with-error-text"
              :value="3"
            ></ui-checkbox>
            <label for="with-error-text">Error Text</label>
          </ui-form-field>
        </ui-form>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Fully-Featured JS Component</h6>
      <div class="demo">
        <div class="example" :dir="controls.rtl ? 'rtl' : null">
          <ui-select
            id="full-func-js-select"
            v-model="selected1.value"
            :options="options1"
            :class="{ 'demo-select-custom-colors': controls.customColor }"
            :disabled="controls.disabled"
            @selected="onSelected($event, 1)"
          >
            Food Group
          </ui-select>
        </div>
        <p>
          Currently selected:
          <span id="currently-selected">{{
            selected1.value
              ? `${selected1.value} at index ${selected1.index}`
              : '(none)'
          }}</span>
        </p>
        <ui-select-controls v-model="controls"></ui-select-controls>
        <div class="button-container">
          <ui-button id="set-value-meat-button" raised @click="onClick">
            Set Value to Meat
          </ui-button>
        </div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Outlined Select</h6>
      <div class="demo">
        <div class="example" :dir="controls.rtl ? 'rtl' : null">
          <ui-select
            id="outlined-select"
            v-model="selected1.value"
            outlined
            :options="options1"
            :class="{ 'demo-select-custom-colors': controls.customColor }"
            :disabled="controls.disabled"
            @selected="onSelected($event, 1)"
          >
            Food Group
          </ui-select>
        </div>
        <p>
          Currently selected:
          <span id="currently-selected-outline">{{
            selected1.value
              ? `${selected1.value} at index ${selected1.index}`
              : '(none)'
          }}</span>
        </p>
        <ui-select-controls
          v-model="controls"
          id-prefix="outline"
        ></ui-select-controls>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Pre-selected option via HTML</h6>
      <div class="demo">
        <ui-select
          id="select-preselected"
          v-model="selected3"
          :options="options2"
        >
          Food Group
        </ui-select>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Custom Select</h6>
      <div class="demo">
        <ui-select
          v-model="formData.province"
          :options="provinces"
          default-label="Province"
          @change="onChangeProvince"
        ></ui-select>

        <ui-select
          v-model="formData.city"
          :options="cities"
          default-label="City"
        ></ui-select>
        <p>Province: {{ formData.province }} - City: {{ formData.city }}</p>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { PROVINCES, CITIES, OPTIONS } from '../../../data/select';

const UiSelectControls = () => import('@/demos/select/select-controls');

const TypeOptions = [
  {
    label: 'Filled',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  }
];

const SelectOptions = [
  {
    label: 'Leading icon',
    value: 1
  },
  {
    label: 'Helper text',
    value: 2
  }
];

const options = [
  {
    label: 'Apple',
    value: 11
  },
  {
    label: 'Orange',
    value: 22
  },
  {
    label: 'Banana',
    value: 33
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
    titleTemplate: '%s - Select'
  },
  components: {
    UiSelectControls
  },
  data() {
    return {
      // hero
      TypeOptions,
      SelectOptions,
      typeOption: 0,
      selectOption: [],
      selected: '',
      // demo
      selected1: {
        value: '',
        index: -1
      },
      selected2: {
        value: '',
        index: -1
      },
      selected3: 'fruit-roll-ups',
      selected4: 'steak',
      options,
      options1: [],
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
      provinces: [],
      cities: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.options1 = OPTIONS;
      this.provinces = PROVINCES;
    }, 1e3);
  },
  methods: {
    onSelected(result, key) {
      this[`selected${key}`].value = result.value;
      this[`selected${key}`].index = result.index;
    },
    onClick() {
      this.$balmUI.onChange('selected1.value', 'meat');
      this.$balmUI.onChange('selected1.index', 4);
    },
    onChangeProvince(value) {
      this.formData.province = value;

      let key = value || -1;
      this.cities = key > -1 ? CITIES[key] : [];

      this.formData.city = this.cities.length ? this.cities[0].value : '';
    }
  }
};
</script>
