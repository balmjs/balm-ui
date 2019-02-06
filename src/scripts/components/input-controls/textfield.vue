<template>
  <!-- Container -->
  <div :class="className.outer">
    <!-- Leading icon (optional) -->
    <slot name="before" :customIconClass="UI_TEXTFIELD.SLOT_CLASS.customIcon"></slot>

    <!-- Textarea -->
    <template v-if="isMultiLine">
      <div v-if="maxlength" class="mdc-text-field-character-counter"></div>
      <textarea
        :id="id"
        v-model="inputValue"
        :class="className.input"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        :disabled="disabled"
        :required="required"
        :maxlength="maxlength"
        :aria-controls="helptextId"
        :aria-describedby="helptextId"
        v-bind="attrs"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @input="handleInput"
        @keyup="handleKeyup"
        @blur="handleBlur"
      ></textarea>
    </template>
    <!-- Input text -->
    <input
      v-else
      :id="id"
      v-model="inputValue"
      :type="type"
      :class="className.input"
      :placeholder="placeholder"
      :pattern="pattern"
      :disabled="disabled"
      :required="required"
      :maxlength="maxlength"
      :aria-controls="helptextId"
      :aria-describedby="helptextId"
      v-bind="attrs"
      @focus="handleFocus"
      @keydown="handleKeydown"
      @input="handleInput"
      @keyup="handleKeyup"
      @keyup.enter="handleEnter"
      @blur="handleBlur"
    >
    <!-- Label text -->
    <ui-floating-label
      v-if="hasLabel && !(isMultiLine || outlined)"
      :for="id"
      :floatAbove="!!inputValue"
    >
      <slot>{{ label }}</slot>
    </ui-floating-label>

    <!-- Trailing icon (optional) -->
    <slot name="after" :customIconClass="UI_TEXTFIELD.SLOT_CLASS.customIcon"></slot>

    <!-- Activation indicator -->
    <div v-if="isMultiLine || outlined" class="mdc-notched-outline">
      <div class="mdc-notched-outline__leading"></div>
      <div v-if="hasLabel" class="mdc-notched-outline__notch">
        <ui-floating-label :for="id" :floatAbove="!!inputValue">
          <slot>{{ label }}</slot>
        </ui-floating-label>
      </div>
      <div class="mdc-notched-outline__trailing"></div>
    </div>
    <div v-else class="mdc-line-ripple"></div>

    <div v-if="expand" class="mdc-textfield__expand">
      <slot name="expand">
        <!-- For autocomplete -->
      </slot>
    </div>
  </div>
</template>

<script>
import { MDCTextField } from '../../../material-components-web/textfield';
import UiFloatingLabel from './floating-label';
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';
import getType from '../../utils/typeof';

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
    BLUR: 'blur'
  },
  SLOT_CLASS: {
    customIcon: 'mdc-text-field__custom-icon'
  }
};

export default {
  name: 'ui-textfield',
  components: {
    UiFloatingLabel
  },
  mixins: [elementMixin, floatingLabelMixin],
  model: {
    prop: 'model',
    event: UI_TEXTFIELD.EVENT.INPUT
  },
  props: {
    // States
    model: {
      type: [String, Number],
      default: ''
    },
    // Element attributes
    id: String,
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    maxlength: [Number, String], // Required for counter
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
    label: String,
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
    leadingIcon: {
      type: Boolean,
      default: false
    },
    trailingIcon: {
      type: Boolean,
      default: false
    },
    noLabel: {
      type: Boolean,
      default: false
    },
    // For helper text
    helptextId: String,
    // For plus
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_TEXTFIELD,
      $textfield: null,
      inputValue: this.model
    };
  },
  computed: {
    className() {
      return {
        outer: {
          'mdc-text-field': true,
          'mdc-text-field--outlined': this.outlined,
          'mdc-text-field--fullwidth': this.fullwidth && !this.outlined,
          'mdc-text-field--textarea': this.isMultiLine,
          'mdc-text-field--disabled': this.disabled,
          'mdc-text-field--dense': this.dense,
          'mdc-text-field--with-leading-icon': this.leadingIcon,
          'mdc-text-field--with-trailing-icon': this.trailingIcon,
          'mdc-text-field--no-label': this.noLabel
        },
        input: 'mdc-text-field__input'
      };
    },
    isMultiLine() {
      return this.type.toLowerCase() === 'textarea';
    },
    hasLabel() {
      return !(this.noLabel || this.placeholder || this.fullwidth);
    }
  },
  watch: {
    model(val) {
      this.inputValue = val;
    }
  },
  mounted() {
    this.$textfield = new MDCTextField(this.$el);
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
    handleBlur(event) {
      this.$emit(UI_TEXTFIELD.EVENT.BLUR, event);
    }
  }
};
</script>
