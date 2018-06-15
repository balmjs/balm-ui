<template>
  <div :class="className.outer">
    <template v-if="leadingIcon">
      <ui-icon v-if="isMaterialIcon" :class="'mdc-text-field__icon'" :tabindex="clickable">
        {{ leadingIcon }}
      </ui-icon>
      <span v-else class="mdc-text-field__icon mdc-text-field__custom-icon">
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
    <ui-floating-label
      :for="id"
      :floatAbove="floatAbove || inputValue">
      <slot>{{ label }}</slot>
    </ui-floating-label>

    <template v-if="trailingIcon">
      <ui-icon v-if="isMaterialIcon" :class="'mdc-text-field__icon'" :tabindex="clickable">
        {{ trailingIcon }}
      </ui-icon>
      <span v-else class="mdc-text-field__icon mdc-text-field__custom-icon">
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
import UiFormField from './form-field';
import UiFloatingLabel from './floating-label';
import UiIcon from '../icon';
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';
import getType from '../../helpers/typeof';

// const INPUT_TYPES = ['text', 'number', 'password'];
const UI_TEXTFIELD = {
  EVENT: {
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    INPUT: 'input',
    KEYUP: 'keyup',
    CHANGE: 'change',
    ENTER: 'enter',
    BLUR: 'blur'
  }
};

export default {
  name: 'ui-textfield',
  components: {
    UiFloatingLabel,
    UiIcon
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
    // <input> attributes
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    // Styles the text field as a box text field.
    box: {
      type: Boolean,
      default: false
    },
    // Styles the text field as an outlined text field.
    outlined: {
      type: Boolean,
      default: false
    },
    // Styles the text field as a full width text field.
    fullwidth: {
      type: Boolean,
      default: false
    },
    // Styles the text field as a disabled text field.
    disabled: {
      type: Boolean,
      default: false
    },
    // Styles the text field as a dense text field.
    dense: {
      type: Boolean,
      default: false
    },
    // Styles the text field as a text field with a leading icon.
    leadingIcon: String,
    // Styles the text field as a text field with a trailing icon.
    trailingIcon: String,
    // Styles the text field as a text field in focus.
    focused: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    label: String,
    clickable: {
      type: [Number, Boolean],
      default: 0
    },
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
    isMaterialIcon() {
      return (
        getType(this.leadingIcon) === 'string' ||
        getType(this.trailingIcon) === 'string'
      );
    },
    isMultiLine() {
      return this.type.toLowerCase() === 'textarea';
    },
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
          'mdc-text-field--with-trailing-icon': this.trailingIcon,
          'mdc-text-field--focused': this.focused
        },
        input: {
          'mdc-text-field__input': true
        }
      };
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
    }
  }
};
</script>
