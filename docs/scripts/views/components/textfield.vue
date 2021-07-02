<template>
  <docs-page
    name="textfield"
    :apis="['ui-textfield', 'textfield', 'textfield-icon', 'textfield-helper']"
    demo-count="7"
  >
    <template #hero>
      <div class="hero-demo">
        <div v-if="typeOption === 0">
          <ui-textfield
            v-model="value1"
            input-id="my-text-field"
            maxlength="20"
            :with-leading-icon="iconOption.includes(2)"
            :with-trailing-icon="iconOption.includes(3)"
            helper-text-id="my-text-field-helper"
          >
            Label
            <template v-if="iconOption.includes(2)" #before>
              <ui-textfield-icon>favorite</ui-textfield-icon>
            </template>
            <template v-if="iconOption.includes(3)" #after>
              <ui-textfield-icon trailing>visibility</ui-textfield-icon>
            </template>
          </ui-textfield>
          <ui-textfield-helper
            id="my-text-field-helper"
            :class="{ 'show-counter': iconOption.includes(1) }"
            with-counter
            :visible="assistiveTextOption === 1"
            :valid-msg="assistiveTextOption === 2"
          >
            <span v-if="assistiveTextOption === 1">Helper message</span>
            <span v-if="assistiveTextOption === 2">Error message</span>
          </ui-textfield-helper>
        </div>
        <div v-if="typeOption === 1">
          <ui-textfield
            v-model="value2"
            input-id="my-text-field-outlined"
            outlined
            maxlength="20"
            :with-leading-icon="iconOption.includes(2)"
            :with-trailing-icon="iconOption.includes(3)"
            helper-text-id="my-text-field-outlined-helper"
          >
            Label
            <template v-if="iconOption.includes(2)" #before>
              <ui-textfield-icon>favorite</ui-textfield-icon>
            </template>
            <template v-if="iconOption.includes(3)" #after>
              <ui-textfield-icon trailing>visibility</ui-textfield-icon>
            </template>
          </ui-textfield>
          <ui-textfield-helper
            id="my-text-field-outlined-helper"
            :class="{ 'show-counter': iconOption.includes(1) }"
            with-counter
            :visible="assistiveTextOption === 1"
            :valid-msg="assistiveTextOption === 2"
          >
            <span v-if="assistiveTextOption === 1">Helper message</span>
            <span v-if="assistiveTextOption === 2">Error message</span>
          </ui-textfield-helper>
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
        <div class="hero-option hero-options">
          <ui-form class="hero-option">
            <div>Options</div>
            <ui-form-field v-for="option in IconOptions" :key="option.value">
              <ui-checkbox
                v-model="iconOption"
                :input-id="`iconOption${option.value}`"
                :value="option.value"
              ></ui-checkbox>
              <label :for="`iconOption${option.value}`">{{
                option.label
              }}</label>
            </ui-form-field>
          </ui-form>
          <ui-form class="hero-option">
            <div>Assistive text</div>
            <ui-form-field
              v-for="option in AssistiveTextOptions"
              :key="option.value"
            >
              <ui-radio
                v-model="assistiveTextOption"
                :input-id="`textOption${option.value}`"
                name="assistiveText"
                :value="option.value"
              ></ui-radio>
              <label :for="`textOption${option.value}`">{{
                option.label
              }}</label>
            </ui-form-field>
          </ui-form>
        </div>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.1 Full Functionality JS Component (Floating Label, Validation)
      </h6>
      <div class="demo" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          input-id="full-func-text-field"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          helper-text-id="full-func-text-field-helper"
        >
          Email Address
        </ui-textfield>
        <ui-textfield-helper
          v-if="controls.helperText"
          id="full-func-text-field-helper"
          :visible="controls.isVisible"
          :valid-msg="controls.isValidMsg"
        >
          Helper Text (possibly validation message)
        </ui-textfield-helper>
      </div>
      <ui-textfield-controls
        v-model="controls"
        :options="['disabled', 'rtl', 'required', 'customColor', 'helperText']"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Password field with validation</h6>
      <div class="demo">
        <ui-textfield
          input-type="password"
          required
          pattern=".{8,}"
          :attrs="{ autocomplete: 'current-password' }"
          helper-text-id="pw-text-field-helper"
        >
          Choose password
        </ui-textfield>
        <ui-textfield-helper
          id="pw-text-field-helper"
          visible
          valid-msg="Must be at least 8 characters long"
        ></ui-textfield-helper>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Outlined Text Field</h6>
      <div class="demo" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          outlined
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          :maxlength="controls.max ? 10 : null"
          :minlength="controls.min ? 8 : 0"
          helper-text-id="tf-outlined-text-field-helper"
        >
          Your Name
        </ui-textfield>
        <ui-textfield-helper id="tf-outlined-text-field-helper" valid-msg>{{
          controls.min
            ? 'Must be at least 8 characters'
            : 'Helper Text (possibly validation message)'
        }}</ui-textfield-helper>
      </div>
      <ui-textfield-controls
        v-model="controls"
        id-prefix="outlined"
        :options="['disabled', 'rtl', 'required', 'customColor', 'min', 'max']"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Text Field - Leading/Trailing icons</h6>
      <div
        id="demo-tf-box-leading-wrapper"
        class="demo demo-with-icon"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          input-id="tf-box-leading"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          <template #before>
            <ui-textfield-icon :unclickable="controls.unclickable">
              event
            </ui-textfield-icon>
          </template>
          Your name
        </ui-textfield>
      </div>
      <div
        id="demo-tf-box-trailing-wrapper"
        class="demo demo-with-icon"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          input-id="tf-box-trailing"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          Your name
          <template #after>
            <ui-textfield-icon trailing :unclickable="controls.unclickable">
              delete
            </ui-textfield-icon>
          </template>
        </ui-textfield>
      </div>
      <div
        id="demo-tf-outlined-leading-wrapper"
        class="demo demo-with-icon"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          input-id="tf-outlined-leading"
          outlined
          with-leading-icon
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          <template #before="{ iconClass }">
            <span :class="iconClass">
              <i class="fa fa-smile-o"></i>
            </span>
          </template>
          Your other name
        </ui-textfield>
      </div>
      <div
        id="demo-tf-outlined-trailing-wrapper"
        class="demo demo-with-icon"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          input-id="tf-outlined-trailing"
          outlined
          with-trailing-icon
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          Your other name
          <template #after="{ iconClass }">
            <span :class="iconClass">
              <i class="fa fa-close"></i>
            </span>
          </template>
        </ui-textfield>
      </div>
      <ui-textfield-controls
        v-model="controls"
        id-prefix="with-icons"
        :options="[
          'disabled',
          'rtl',
          'required',
          'customColor',
          'min',
          'unclickable'
        ]"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.5 Preventing FOUC</h6>
      <div class="demo">
        <ui-textfield v-model="value" input-id="fouc">
          Label floating above
        </ui-textfield>
      </div>
      <ui-snippet :code="$store.demos[5]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.6 Textarea</h6>
      <div class="demo" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          input-type="textarea"
          rows="8"
          cols="40"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
        >
          Textarea Label
        </ui-textfield>
      </div>
      <br />
      <div class="demo" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          outlined
          input-type="textarea"
          rows="8"
          cols="40"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
        >
          Textarea Label
        </ui-textfield>
      </div>
      <ui-textfield-controls
        v-model="controls"
        id-prefix="textarea"
        :options="['disabled', 'rtl', 'required', 'customColor']"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[6]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.7 Full-Width Text Field and Textarea with counter
      </h6>
      <div class="demo">
        <ui-textfield
          v-model="title"
          input-id="full-width-textfield"
          fullwidth
          placeholder="Subject"
          maxlength="40"
          helper-text-id="full-width-textfield-helper"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
        ></ui-textfield>
        <ui-textfield-helper
          id="full-width-textfield-helper"
          with-counter
        ></ui-textfield-helper>

        <ui-textfield
          v-model="content"
          input-id="full-width-textarea"
          input-type="textarea"
          fullwidth
          placeholder="Content"
          class="full-width-textarea-example"
          rows="8"
          maxlength="140"
          helper-text-id="full-width-textarea-helper"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
        ></ui-textfield>
        <ui-textfield-helper
          id="full-width-textarea-helper"
          with-counter
        ></ui-textfield-helper>
      </div>
      <ui-textfield-controls
        v-model="controls"
        id-prefix="full-width"
        :options="['disabled', 'required', 'customColor']"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[7]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs } from 'vue';
import UiTextfieldControls from '@/demos/textfield/textfield-controls';

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

const IconOptions = [
  {
    label: 'Character counter',
    value: 1
  },
  {
    label: 'Leading icon',
    value: 2
  },
  {
    label: 'Trailing icon',
    value: 3
  }
];

const AssistiveTextOptions = [
  {
    label: 'None',
    value: 0
  },
  {
    label: 'Helper text',
    value: 1
  },
  {
    label: 'Error text',
    value: 2
  }
];

const state = reactive({
  // hero
  typeOption: 0,
  iconOption: [],
  assistiveTextOption: 0,
  value1: '',
  value2: '',
  // demo
  controls: {
    disabled: false,
    rtl: false,
    required: false,
    customColor: false,
    helperText: false,
    isVisible: false,
    isValidMsg: false,
    min: false,
    max: false,
    unclickable: false
  },
  value: 'Pre-filled value',
  title: '',
  content: ''
});

export default {
  metaInfo: {
    titleTemplate: '%s - Textfield'
  },
  components: {
    UiTextfieldControls
  },
  setup() {
    return {
      TypeOptions,
      IconOptions,
      AssistiveTextOptions,
      ...toRefs(state)
    };
  }
};
</script>
