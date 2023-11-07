<template>
  <div ref="root" v-bind="$attrs">Composition API</div>

  <div :style="'padding: 10px'">
    <ui-form :type="formType" item-margin-bottom="20">
      <template #default="{ itemClass, subitemClass, actionClass }">
        <ui-form-field>
          <label>Textfield</label>
          <ui-textfield :fullwidth="fullwidth"></ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <label>Autocomplete</label>
          <ui-autocomplete
            v-model="keywords"
            :source="source"
            :fullwidth="fullwidth"
          ></ui-autocomplete>
        </ui-form-field>
        <ui-form-field>
          <label>Editor</label>
          <ui-editor :fullwidth="fullwidth"></ui-editor>
        </ui-form-field>
        <ui-form-field>
          <label>Select</label>
          <ui-select :options="options" :fullwidth="fullwidth"></ui-select>
        </ui-form-field>
        <ui-form-field>
          <label>Checkbox</label>
          <div :class="subitemClass">
            <template v-for="i in 4" :key="i">
              <ui-form-field>
                <ui-checkbox :input-id="`checkbox-${i}`"></ui-checkbox>
                <label :for="`checkbox-${i}`">Item{{ i }}</label>
              </ui-form-field>
            </template>
          </div>
        </ui-form-field>
        <ui-form-field>
          <label>Radio</label>
          <div :class="subitemClass">
            <template v-for="i in 4" :key="i">
              <ui-form-field>
                <ui-radio
                  v-model="radioValue"
                  :input-id="`radio-${i}`"
                  :value="i"
                ></ui-radio>
                <label :for="`radio-${i}`">Item{{ i }}</label>
              </ui-form-field>
            </template>
          </div>
        </ui-form-field>
        <ui-form-field>
          <label>Segmented</label>
          <ui-segmented-buttons :items="items"></ui-segmented-buttons>
        </ui-form-field>
        <ui-form-field>
          <label>Chips</label>
          <ui-chips type="choice" :options="options"></ui-chips>
        </ui-form-field>
        <ui-form-field>
          <label>File</label>
          <ui-file></ui-file>
        </ui-form-field>
        <ui-form-field>
          <label>Datepicker</label>
          <ui-datepicker></ui-datepicker>
        </ui-form-field>
        <ui-form-field>
          <label>Rangepicker</label>
          <ui-rangepicker></ui-rangepicker>
        </ui-form-field>
        <ui-form-field>
          <label>Switch</label>
          <ui-switch></ui-switch>
        </ui-form-field>
        <ui-form-field>
          <label>Slider</label>
          <ui-slider></ui-slider>
        </ui-form-field>
      </template>
    </ui-form>
  </div>

  <!-- <ui-dialog v-model="open">
    <ui-dialog-content>
      <div :style="'padding: 10px'">
        <ui-form :type="formType" item-margin-bottom="20">
          <template #default="{ itemClass, subitemClass, actionClass }">
            <ui-form-field>
              <label>Textfield</label>
              <ui-textfield :fullwidth="fullwidth"></ui-textfield>
            </ui-form-field>
            <ui-form-field>
              <label>Autocomplete</label>
              <ui-autocomplete
                v-model="keywords"
                :source="source"
                :fullwidth="fullwidth"
              ></ui-autocomplete>
            </ui-form-field>
            <ui-form-field>
              <label>Editor</label>
              <ui-editor :fullwidth="fullwidth"></ui-editor>
            </ui-form-field>
            <ui-form-field>
              <label>Select</label>
              <ui-select :options="options" :fullwidth="fullwidth"></ui-select>
            </ui-form-field>
            <ui-form-field>
              <label>Checkbox</label>
              <div :class="subitemClass">
                <template v-for="i in 4" :key="i">
                  <ui-form-field>
                    <ui-checkbox :input-id="`checkbox-${i}`"></ui-checkbox>
                    <label :for="`checkbox-${i}`">Item{{ i }}</label>
                  </ui-form-field>
                </template>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Radio</label>
              <div :class="subitemClass">
                <template v-for="i in 4" :key="i">
                  <ui-form-field>
                    <ui-radio
                      v-model="radioValue"
                      :input-id="`radio-${i}`"
                      :value="i"
                    ></ui-radio>
                    <label :for="`radio-${i}`">Item{{ i }}</label>
                  </ui-form-field>
                </template>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Segmented</label>
              <ui-segmented-buttons :items="items"></ui-segmented-buttons>
            </ui-form-field>
            <ui-form-field>
              <label>Chips</label>
              <ui-chips type="choice" :options="options"></ui-chips>
            </ui-form-field>
            <ui-form-field>
              <label>File</label>
              <ui-file></ui-file>
            </ui-form-field>
            <ui-form-field>
              <label>Datepicker</label>
              <ui-datepicker></ui-datepicker>
            </ui-form-field>
            <ui-form-field>
              <label>Rangepicker</label>
              <ui-rangepicker></ui-rangepicker>
            </ui-form-field>
            <ui-form-field>
              <label>Switch</label>
              <ui-switch></ui-switch>
            </ui-form-field>
            <ui-form-field>
              <label>Slider</label>
              <ui-slider></ui-slider>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
    </ui-dialog-content>
  </ui-dialog> -->
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue';

const root = ref(null);

const formType = '|';
const fullwidth = false;

const source = [
  'ActionScript',
  'AppleScript',
  'Asp',
  'BASIC',
  'C',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme'
];

const options = [
  {
    label: 'A',
    value: 1
  },
  {
    label: 'B',
    value: 2
  },
  {
    label: 'C',
    value: 3
  },
  {
    label: 'D',
    value: 4
  }
  // {
  //   label: 'E',
  //   value: 5
  // },
  // {
  //   label: 'F',
  //   value: 6
  // },
  // {
  //   label: 'G',
  //   value: 7
  // },
  // {
  //   label: 'H',
  //   value: 8
  // },
  // {
  //   label: 'I',
  //   value: 9
  // },
  // {
  //   label: 'J',
  //   value: 10
  // },
  // {
  //   label: 'K',
  //   value: 11
  // },
  // {
  //   label: 'L',
  //   value: 12
  // },
  // {
  //   label: 'M',
  //   value: 13
  // },
  // {
  //   label: 'N',
  //   value: 14
  // },
  // {
  //   label: 'O',
  //   value: 15
  // },
  // {
  //   label: 'P',
  //   value: 16
  // }
];

const items = [
  {
    icon: 'favorite'
  },
  {
    text: 'Sample Text'
  },
  {
    icon: 'favorite',
    text: 'Sample Text'
  }
];

const state = reactive({
  value: '',
  value2: '',
  keywords: '',
  open: false,
  radioValue: 0
});
const { value, value2, keywords, open, radioValue } = toRefs(state);

onMounted(() => {
  console.log(root.value);

  setTimeout(() => {
    state.open = true;
  });
});
</script>

<style></style>
