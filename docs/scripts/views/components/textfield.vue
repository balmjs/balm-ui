<template>
  <div :class="[$tt('body1'), 'demo--textfield']">
    <header class="hero component">
      <div class="hero-demo">
        <div>
          <template v-if="typeOption === 0">
            <ui-textfield
              id="my-text-field"
              v-model="value1"
              maxlength="20"
              :icon="iconOption.includes(2) ? 'favorite' : ''"
              :trailingIcon="iconOption.includes(3)"
              helperTextId="my-text-field-helper"
              :required="assistiveTextOption === 2"
              :pattern="assistiveTextOption === 2 ? '[a-z]{256,}' : null"
              >Label
              <template v-if="iconOption.includes(3)" #after>
                <ui-textfield-icon>visibility</ui-textfield-icon>
              </template>
            </ui-textfield>
            <ui-textfield-helper
              id="my-text-field-helper"
              :visible="assistiveTextOption === 1"
              :validMsg="assistiveTextOption === 2 ? 'Error message' : ''"
            >
              <template v-if="assistiveTextOption === 1" #default
                >Helper message</template
              >
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
              :icon="iconOption.includes(2) ? 'favorite' : ''"
              :trailingIcon="iconOption.includes(3)"
              helperTextId="my-text-field-outlined-helper"
              :required="assistiveTextOption === 2"
              :pattern="assistiveTextOption === 2 ? '[a-z]{256,}' : null"
              >Label
              <template v-if="iconOption.includes(3)" #after>
                <ui-textfield-icon>visibility</ui-textfield-icon>
              </template>
            </ui-textfield>
            <ui-textfield-helper
              id="my-text-field-outlined-helper"
              :visible="assistiveTextOption === 1"
              :validMsg="assistiveTextOption === 2 ? 'Error message' : ''"
            >
              <template v-if="assistiveTextOption === 1" #default
                >Helper message</template
              >
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
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <h3>
          1.1 Full Functionality JS Component (Floating Label, Validation)
        </h3>
        <section
          id="demo-text-field-wrapper"
          :dir="controls.rtl ? 'rtl' : null"
        >
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
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h3>1.2 Password field with validation</h3>
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
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h3>1.3 Outlined Text Field</h3>
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
        <ui-accordion>
          <ui-markdown :code="code[3]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example" id="demo-tf-icon-container">
        <h3>1.4 Text Field - Leading/Trailing icons</h3>
        <div
          class="demo-tf-add-space"
          id="demo-tf-box-leading-wrapper"
          :dir="controls.rtl ? 'rtl' : null"
        >
          <ui-textfield
            id="tf-box-leading"
            leadingIcon
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
            trailingIcon
            :class="{ 'demo-text-field-custom-colors': controls.customColor }"
            :disabled="controls.disabled"
            :dense="controls.dense"
            :required="controls.required"
            :minlength="controls.min ? 8 : 0"
          >
            Your name
            <template #after>
              <ui-textfield-icon :unclickable="controls.unclickable"
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
            leadingIcon
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
            trailingIcon
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
        <ui-accordion>
          <ui-markdown :code="code[4]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h3>1.5 Preventing FOUC</h3>
        <ui-textfield id="fouc" v-model="value"
          >Label floating above</ui-textfield
        >
        <ui-accordion>
          <ui-markdown :code="code[5]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h3>1.6 Textarea</h3>
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
        <ui-accordion>
          <ui-markdown :code="code[6]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h3>1.7 Full-Width Text Field and Textarea with counter</h3>
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
            noLabel
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
        <ui-accordion>
          <ui-markdown :code="code[7]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="textfield"></ui-apidocs>
      <ui-apidocs name="textfield-helper"></ui-apidocs>
      <ui-apidocs name="textfield-icon"></ui-apidocs>
      <ui-apidocs name="textfield-counter"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="textfield"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
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
  mixins: [snippets],
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
  // },
  created() {
    this.showCode('textfield', 7);
  }
};
</script>
