<template>
  <!-- Container -->
  <div :class="className.outer">
    <div v-if="hasRipple" class="mdc-text-field__ripple"></div>

    <!-- Leading icon (optional) -->
    <slot
      name="before"
      :iconClass="`${UI_TEXTFIELD_ICON.cssClasses.icon} ${UI_TEXTFIELD_ICON.cssClasses.leadingIcon}`"
    >
      <i
        v-if="materialIcon"
        :class="[
          UI_GLOBAL.cssClasses.icon,
          UI_TEXTFIELD_ICON.cssClasses.icon,
          UI_TEXTFIELD_ICON.cssClasses.leadingIcon
        ]"
        v-text="materialIcon"
      ></i>
    </slot>

    <!-- Textarea -->
    <template v-if="isTextarea">
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
        :minlength="minlength"
        :maxlength="maxlength"
        :aria-labelledby="id"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
        v-bind="attrs"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @input="handleInput"
        @keyup="handleKeyup"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
      ></textarea>
    </template>
    <!-- Input text -->
    <template v-else>
      <span
        v-if="prefixText"
        class="mdc-text-field__affix mdc-text-field__affix--prefix"
        v-text="prefixText"
      ></span>
      <input
        :id="id"
        v-model="inputValue"
        :type="inputType"
        :class="className.input"
        :placeholder="placeholder"
        :pattern="pattern"
        :disabled="disabled"
        :required="required"
        :minlength="minlength"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
        :aria-labelledby="id"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
        v-bind="attrs"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @input="handleInput"
        @keyup="handleKeyup"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
      />
      <span
        v-if="suffixText"
        class="mdc-text-field__affix mdc-text-field__affix--suffix"
        v-text="suffixText"
      ></span>

      <!-- Character counter (optional) -->
      <ui-textfield-counter v-if="withCounter"></ui-textfield-counter>
    </template>

    <!-- Trailing icon (optional) -->
    <slot
      name="after"
      :iconClass="`${UI_TEXTFIELD_ICON.cssClasses.icon} ${UI_TEXTFIELD_ICON.cssClasses.trailingIcon}`"
    ></slot>

    <!-- Label text -->
    <ui-floating-label v-if="hasLabel && hasRipple" :for="id">
      <slot>{{ label }}</slot>
    </ui-floating-label>

    <!-- Activation indicator -->
    <span v-if="hasRipple" class="mdc-line-ripple"></span>
    <ui-notched-outline v-else :has-label="hasLabel">
      <ui-floating-label :for="id">
        <slot>{{ label }}</slot>
      </ui-floating-label>
    </ui-notched-outline>

    <!-- Custom area (optional) -->
    <div v-if="plus" class="mdc-text-field__plus">
      <slot name="plus">
        <!-- For autocomplete -->
      </slot>
    </div>
  </div>
</template>

<script>
import { MDCTextField } from '../../../material-components-web/textfield';
import UiFloatingLabel from '../form-controls/floating-label';
import UiNotchedOutline from '../form-controls/notched-outline';
import UiTextfieldCounter from './textfield-counter';
import textfieldMixin from '../../mixins/textfield';
import typeMixin from '../../mixins/type';
import elementMixin from '../../mixins/element';
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from './constants';

// Define textfield constants
const UI_TEXTFIELD = {
  TYPES: {
    filled: 0,
    outlined: 1
  },
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
  name: 'UiTextfield',
  components: {
    UiFloatingLabel,
    UiNotchedOutline,
    UiTextfieldCounter
  },
  mixins: [textfieldMixin, typeMixin, elementMixin, materialIconMixin],
  model: {
    prop: 'model',
    event: UI_TEXTFIELD.EVENT.INPUT
  },
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    model: {
      type: [String, Number, Array], // NOTE: Array for `<ui-datepicker>`
      default: ''
    },
    // <input> attributes
    inputType: {
      type: String,
      default: 'text'
    },
    prefixText: {
      type: String,
      default: ''
    },
    suffixText: {
      type: String,
      default: ''
    },
    // <textarea> attributes
    rows: {
      type: [Number, String],
      default: 1
    },
    cols: {
      type: [Number, String],
      default: 20
    },
    // For native common
    required: {
      type: Boolean,
      default: false
    },
    minlength: {
      type: [String, Number, null],
      default: null
    },
    maxlength: {
      type: [String, Number, null],
      default: null
    },
    // For native <input>
    pattern: {
      type: [String, null],
      default: null
    },
    min: {
      type: [String, Number, null],
      default: null
    },
    max: {
      type: [String, Number, null],
      default: null
    },
    step: {
      type: [String, Number, null],
      default: null
    },
    // For helper text
    helperTextId: {
      type: [String, null],
      default: null
    },
    // For plus
    plus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_TEXTFIELD,
      UI_TEXTFIELD_ICON,
      $textField: null,
      inputValue: this.model
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_TEXTFIELD.TYPES, 'outlined');
    },
    isTextarea() {
      return this.inputType === 'textarea';
    },
    hasRipple() {
      return !(this.isOutlined || this.isTextarea);
    },
    hasLabel() {
      return !(this.noLabel || this.fullwidth);
    },
    hasLeadingIcon() {
      return this.materialIcon || this.withLeadingIcon || this.$slots.before;
    },
    hasTrailingIcon() {
      return this.withTrailingIcon || this.$slots.after;
    },
    noLabel() {
      return !!this.placeholder;
    },
    className() {
      return {
        outer: {
          'mdc-text-field': true,
          'mdc-text-field--filled': !this.isOutlined,
          'mdc-text-field--outlined': this.isOutlined,
          'mdc-text-field--fullwidth': this.fullwidth && !this.isOutlined,
          'mdc-text-field--textarea': this.isTextarea,
          'mdc-text-field--disabled': this.disabled,
          'mdc-text-field--with-leading-icon': this.hasLeadingIcon,
          'mdc-text-field--with-trailing-icon': this.hasTrailingIcon,
          'mdc-text-field--no-label': this.noLabel,
          'mdc-text-field--end-aligned': this.endAligned,
          'mdc-text-field--with-internal-counter': this.withCounter
        },
        input: 'mdc-text-field__input'
      };
    }
  },
  watch: {
    model(val, oldVal) {
      this.inputValue = val;

      // NOTE: fix dynamic assignment bug
      if (!oldVal && val) {
        this.$textField.value = val;
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$el.nextElementSibling) {
        const characterCounter = this.$el.nextElementSibling.querySelector(
          '.mdc-text-field-character-counter'
        );

        if (characterCounter && !this.maxlength) {
          characterCounter.parentNode.removeChild(characterCounter);
          console.warn(
            'The `maxlength` prop is required in the `<ui-textfield>` with character counter.'
          );
        }
      }

      this.$textField = new MDCTextField(this.$el);
    },
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
    handleChange(event) {
      this.$emit(UI_TEXTFIELD.EVENT.CHANGE, event);
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
