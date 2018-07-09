<template>
  <div :class="className.outer">
    <template v-if="hasIcon">
      <ui-textfield-icon v-if="isMaterialIcon"
        :unclickable="leadingIconUnclickable"
        @click="handleLeadingIcon">
        {{ leadingIcon }}
      </ui-textfield-icon>
      <span v-else class="mdc-text-field__custom-icon">
        <slot name="before"></slot>
      </span>
    </template>
    <template v-else>
      <slot name="before"></slot>
    </template>

    <!-- Textarea -->
    <textarea v-if="isMultiLine"
              :id="id"
              ref="input"
              :v-model="inputValue"
              :class="className.input"
              :placeholder="placeholder"
              :rows="rows"
              :cols="cols"
              :disabled="disabled"
              :required="required"
              :autocomplete="autocomplete"
              :aria-controls="helptextId"
              :aria-describedby="helptextId"
              @focus="handleFocus"
              @keydown="handleKeydown"
              @input="handleInput"
              @keyup="handleKeyup"
              @blur="handleBlur"></textarea>
    <!-- Input -->
    <input v-else
           :id="id"
           ref="input"
           :type="type"
           :class="className.input"
           :placeholder="placeholder"
           :pattern="pattern"
           :value="inputValue"
           :disabled="disabled"
           :required="required"
           :autocomplete="autocomplete"
           :aria-controls="helptextId"
           :aria-describedby="helptextId"
           @focus="handleFocus"
           @keydown="handleKeydown"
           @input="handleInput"
           @keyup="handleKeyup"
           @keyup.enter="handleEnter"
           @blur="handleBlur">
    <ui-floating-label v-if="!placeholder"
      :for="id"
      :floatAbove="!!inputValue">
      <slot>{{ label }}</slot>
    </ui-floating-label>

    <template v-if="hasIcon">
      <ui-textfield-icon v-if="isMaterialIcon"
        :unclickable="trailingIconUnclickable"
        @click="handleTrailingIcon">
        {{ trailingIcon }}
      </ui-textfield-icon>
      <span v-else class="mdc-text-field__custom-icon">
        <slot name="after"></slot>
      </span>
    </template>
    <template v-else>
      <slot name="after"></slot>
    </template>

    <template v-if="!(cssOnly || isMultiLine)">
      <template v-if="outlined">
        <div class="mdc-notched-outline">
          <svg>
            <path class="mdc-notched-outline__path"/>
          </svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
      </template>
      <div v-else class="mdc-line-ripple"></div>
    </template>
  </div>
</template>

<script>
import { MDCTextField } from '../../../material-components-web/textfield';
import UiFloatingLabel from './floating-label';
import UiTextfieldIcon from './textfield-icon';
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';
import getType from '../../utilities/typeof';

// Define constants
const UI_TEXTFIELD = {
  // INPUT_TYPES: ['text', 'number', 'password'],
  EVENT: {
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    INPUT: 'input',
    KEYUP: 'keyup',
    CHANGE: 'change',
    ENTER: 'enter',
    BLUR: 'blur',
    LEADING: 'leading-action',
    TRAILING: 'trailing-action'
  }
};

export default {
  name: 'ui-textfield',
  components: {
    UiFloatingLabel,
    UiTextfieldIcon
  },
  mixins: [elementMixin, floatingLabelMixin],
  model: {
    prop: 'model',
    event: UI_TEXTFIELD.EVENT.INPUT
  },
  props: {
    // States
    model: [String, Number],
    // Element attributes
    id: String,
    placeholder: String,
    autocomplete: String,
    required: {
      type: Boolean,
      default: false
    },
    // <input> attributes
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    // <textarea> attributes
    rows: {
      type: [Number, String],
      default: 1
    },
    cols: {
      type: [Number, String],
      default: 20
    },
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    label: String,
    box: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    leadingIcon: String,
    leadingIconUnclickable: {
      type: Boolean,
      default: false
    },
    trailingIcon: String,
    trailingIconUnclickable: {
      type: Boolean,
      default: false
    },
    // focused: {
    //   type: Boolean,
    //   default: false
    // },
    // For helper text
    helptextId: String
  },
  data() {
    return {
      $textfield: null,
      inputValue: this.model
    };
  },
  computed: {
    className() {
      return {
        outer: {
          'mdc-text-field': true,
          'mdc-text-field--upgraded': !this.cssOnly,
          'mdc-text-field--box': this.box,
          'mdc-text-field--outlined': this.outlined,
          'mdc-text-field--fullwidth': this.fullwidth,
          'mdc-text-field--textarea': this.isMultiLine,
          'mdc-text-field--disabled': this.disabled,
          'mdc-text-field--dense': this.dense,
          'mdc-text-field--with-leading-icon': this.leadingIcon,
          'mdc-text-field--with-trailing-icon': this.trailingIcon
          // 'mdc-text-field--focused': this.focused
        },
        input: 'mdc-text-field__input'
      };
    },
    isMultiLine() {
      return this.type.toLowerCase() === 'textarea';
    },
    hasIcon() {
      return this.box || this.outlined;
    },
    isMaterialIcon() {
      return (
        getType(this.leadingIcon) === 'string' ||
        getType(this.trailingIcon) === 'string'
      );
    }
  },
  watch: {
    model(val) {
      this.inputValue = val;
    }
  },
  mounted() {
    const textfield = this.$el;
    const element = this.isMultiLine
      ? textfield.querySelector('textarea')
      : textfield.querySelector('input');
    this.initAttributes(element);

    if (!this.$textfield && !this.cssOnly) {
      this.$textfield = new MDCTextField(textfield);
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit(UI_TEXTFIELD.EVENT.FOCUS, event);
    },
    handleKeydown(event) {
      this.$emit(UI_TEXTFIELD.EVENT.KEYDOWN, event);
    },
    handleInput(event) {
      this.$emit(UI_TEXTFIELD.EVENT.INPUT, event.target.value);
    },
    handleKeyup(event) {
      this.$emit(UI_TEXTFIELD.EVENT.KEYUP, event);
    },
    handleEnter(event) {
      this.$emit(UI_TEXTFIELD.EVENT.ENTER, event.target.value);
    },
    handleBlur() {
      let input = this.$refs.input;

      let valid = input.checkValidity();
      let validity = input.validity;
      let message = input.validationMessage;

      let result = {
        valid,
        validity,
        message
      };

      this.$emit(UI_TEXTFIELD.EVENT.BLUR, result);
    },
    handleLeadingIcon() {
      this.$emit(UI_TEXTFIELD.EVENT.LEADING);
    },
    handleTrailingIcon() {
      this.$emit(UI_TEXTFIELD.EVENT.TRAILING);
    }
  }
};
</script>
