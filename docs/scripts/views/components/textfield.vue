<template>
  <ui-page-structure
    name="textfield"
    demoCount="7"
    :apis="[
      'textfield',
      'textfield-helper',
      'textfield-icon',
      'textfield-counter'
    ]"
  >
    <template #hero>
      <div class="hero-demo">
        <div>
          <template v-if="typeOption === 0">
            <ui-textfield
              id="my-text-field"
              v-model="value1"
              maxlength="20"
              helperTextId="my-text-field-helper"
              :withLeadingIcon="iconOption.includes(2)"
              :withTrailingIcon="iconOption.includes(3)"
              :required="assistiveTextOption === 2"
              :pattern="assistiveTextOption === 2 ? '[a-z]{256,}' : null"
              >Label
              <template v-if="iconOption.includes(2)" #before>
                <ui-textfield-icon>favorite</ui-textfield-icon>
              </template>
              <template v-if="iconOption.includes(3)" #after>
                <ui-textfield-icon trailing>visibility</ui-textfield-icon>
              </template>
            </ui-textfield>
            <ui-textfield-helper
              id="my-text-field-helper"
              :visible="assistiveTextOption === 1"
              :validMsg="assistiveTextOption === 2 ? 'Error message' : ''"
            >
              <template v-if="assistiveTextOption === 1" #default>
                Helper message
              </template>
              <template #counter>
                <ui-textfield-counter
                  v-show="iconOption.includes(1)"
                ></ui-textfield-counter>
              </template>
            </ui-textfield-helper>
          </template>
        </div>
        <div>
          <template v-if="typeOption === 1">
            <ui-textfield
              outlined
              id="my-text-field-outlined"
              v-model="value2"
              maxlength="20"
              helperTextId="my-text-field-outlined-helper"
              :required="assistiveTextOption === 2"
              :pattern="assistiveTextOption === 2 ? '[a-z]{256,}' : null"
              >Label
              <template v-if="iconOption.includes(2)" #before>
                <ui-textfield-icon>favorite</ui-textfield-icon>
              </template>
              <template v-if="iconOption.includes(3)" #after>
                <ui-textfield-icon trailing>visibility</ui-textfield-icon>
              </template>
            </ui-textfield>
            <ui-textfield-helper
              id="my-text-field-outlined-helper"
              :visible="assistiveTextOption === 1"
              :validMsg="assistiveTextOption === 2 ? 'Error message' : ''"
            >
              <template v-if="assistiveTextOption === 1" #default>
                Helper message
              </template>
              <template #counter>
                <ui-textfield-counter
                  v-show="iconOption.includes(1)"
                ></ui-textfield-counter>
              </template>
            </ui-textfield-helper>
          </template>
        </div>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <div class="hero-option">
          <div>Options</div>
          <ui-form-field
            v-for="option in IconOptions"
            :key="option.value"
            block
          >
            <ui-checkbox
              :id="`iconOption${option.value}`"
              v-model="iconOption"
              :value="option.value"
            ></ui-checkbox>
            <label :for="`iconOption${option.value}`">{{ option.label }}</label>
          </ui-form-field>
        </div>
        <div class="hero-option">
          <div>Assistive text</div>
          <ui-form-field
            v-for="option in AssistiveTextOptions"
            :key="option.value"
            block
          >
            <ui-radio
              :id="`iconOption${option.value}`"
              v-model="assistiveTextOption"
              name="assistiveText"
              :value="option.value"
            ></ui-radio>
            <label :for="`iconOption${option.value}`">{{ option.label }}</label>
          </ui-form-field>
        </div>
      </div>
    </template>

    <!-- Content -->
    <section class="example">
      <h6 :class="$tt('headline6')">
        1.1 Full Functionality JS Component (Floating Label, Validation)
      </h6>
      <section id="demo-text-field-wrapper" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          id="full-func-text-field"
          helperTextId="my-text-field-helper-text"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          >Email Address</ui-textfield
        >
        <ui-textfield-helper
          v-if="controls.helperText"
          id="my-text-field-helper-text"
          :visible="controls.isVisible"
          :validMsg="controls.hasValidMsg"
          >Helper Text (possibly validation message)</ui-textfield-helper
        >
      </section>
      <ui-textfield-controls
        :options="[
          'disabled',
          'rtl',
          'dense',
          'required',
          'customColor',
          'helperText'
        ]"
        v-model="controls"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.2 Password field with validation</h6>
      <ui-textfield
        inputType="password"
        required
        pattern=".{8,}"
        id="pw"
        helperTextId="pw-validation-msg"
        :attrs="{ autocomplete: 'current-password' }"
        >Choose password</ui-textfield
      >
      <ui-textfield-helper id="pw-validation-msg" visible validMsg
        >Must be at least 8 characters long</ui-textfield-helper
      >
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.3 Outlined Text Field</h6>
      <div id="demo-tf-outlined-wrapper" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield
          id="tf-outlined-input"
          outlined
          helperTextId="name-validation-message"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :maxlength="controls.max ? 10 : null"
          :minlength="controls.min ? 8 : 0"
          >Your Name</ui-textfield
        >
        <ui-textfield-helper id="name-validation-message" validMsg>
          {{
            controls.min
              ? 'Must be at least 8 characters'
              : 'Helper Text (possibly validation message)'
          }}
        </ui-textfield-helper>
      </div>
      <ui-textfield-controls
        idPrefix="outlined"
        :options="[
          'disabled',
          'rtl',
          'dense',
          'required',
          'customColor',
          'min',
          'max'
        ]"
        v-model="controls"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="example" id="demo-tf-icon-container">
      <h6 :class="$tt('headline6')">1.4 Text Field - Leading/Trailing icons</h6>
      <div
        class="demo-tf-add-space"
        id="demo-tf-box-leading-wrapper"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          id="tf-box-leading"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          <template #before>
            <ui-textfield-icon :unclickable="controls.unclickable"
              >event</ui-textfield-icon
            >
          </template>
          Your name
        </ui-textfield>
      </div>
      <div
        class="demo-tf-add-space"
        id="demo-tf-box-trailing-wrapper"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          id="tf-box-trailing"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :minlength="controls.min ? 8 : 0"
        >
          Your name
          <template #after>
            <ui-textfield-icon trailing :unclickable="controls.unclickable"
              >delete</ui-textfield-icon
            >
          </template>
        </ui-textfield>
      </div>
      <div
        class="demo-tf-add-space"
        id="demo-tf-outlined-leading-wrapper"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          id="tf-outlined-leading"
          outlined
          withLeadingIcon
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
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
        class="demo-tf-add-space"
        id="demo-tf-outlined-trailing-wrapper"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          id="tf-outlined-trailing"
          outlined
          withTrailingIcon
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
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
        :options="[
          'disabled',
          'rtl',
          'dense',
          'required',
          'customColor',
          'min',
          'unclickable'
        ]"
        v-model="controls"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.5 Preventing FOUC</h6>
      <ui-textfield id="fouc" v-model="value"
        >Label floating above</ui-textfield
      >
      <ui-snippet :code="$store.demos[5]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.6 Textarea</h6>
      <section
        id="demo-text-field-textarea-wrapper"
        :dir="controls.rtl ? 'rtl' : null"
      >
        <ui-textfield
          inputType="textarea"
          id="textarea"
          rows="8"
          cols="40"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :required="controls.required"
          >Textarea Label</ui-textfield
        >
      </section>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'required', 'customColor']"
        v-model="controls"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[6]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">
        1.7 Full-Width Text Field and Textarea with counter
      </h6>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield
          v-model="title"
          fullwidth
          placeholder="Subject"
          maxlength="40"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
        ></ui-textfield>
        <ui-textfield-counter></ui-textfield-counter>

        <ui-textfield
          inputType="textarea"
          v-model="content"
          id="full-width-textarea"
          fullwidth
          placeholder="Content"
          class="full-width-textarea-example"
          rows="8"
          maxlength="140"
          :class="{ 'demo-text-field-custom-colors': controls.customColor }"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
        ></ui-textfield>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'dense', 'required', 'customColor']"
        v-model="controls"
      ></ui-textfield-controls>
      <ui-snippet :code="$store.demos[7]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
const UiTextfieldControls = () =>
  import('@/demos/textfield/textfield-controls');

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

export default {
  metaInfo: {
    titleTemplate: '%s - Textfield'
  },
  components: {
    UiTextfieldControls
  },
  data() {
    return {
      // hero
      TypeOptions,
      IconOptions,
      AssistiveTextOptions,
      typeOption: 0,
      iconOption: [],
      assistiveTextOption: 0,
      value1: '',
      value2: '',
      // demo
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        hasValidMsg: false,
        min: false,
        max: false,
        unclickable: false
      },
      value: 'Pre-filled value',
      title: '',
      content: ''
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.value1 = 'Hello BalmJS';
    // }, 1e3);
  }
  // methods: {
  //   onFocus(event) {
  //     console.log('onFocus', event);
  //   },
  //   onBlur({ valid, message }) {
  //     if (this.useValidation) {
  //       this.msg = message;
  //     } else {
  //       this.msg = 'Help Text (possibly validation message)';
  //     }
  //   },
  //   onInput(value) {
  //     console.log('onInput', value);
  //     this.text = value;
  //   },
  //   onKeydown(event) {
  //     console.log('onKeydown', event);
  //   },
  //   onEnter(value) {
  //     console.log('onEnter', value);
  //   }
  // }
};
</script>
