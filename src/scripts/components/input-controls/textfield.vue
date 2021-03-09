<template>
  <!-- Container -->
  <div :class="className.outer">
    <div v-if="!isOutlined" class="mdc-text-field__ripple"></div>

    <!-- Leading icon (optional) -->
    <slot
      name="before"
      :iconClass="`${UI_TEXTFIELD_ICON.cssClasses.icon} ${UI_TEXTFIELD_ICON.cssClasses.leadingIcon}`"
    >
      <i
        v-if="materialIcon"
        :class="
          getIconClassName([
            UI_TEXTFIELD_ICON.cssClasses.icon,
            UI_TEXTFIELD_ICON.cssClasses.leadingIcon
          ])
        "
        v-text="materialIcon"
      ></i>
    </slot>

    <!-- Textarea -->
    <template v-if="isTextarea">
      <span class="mdc-text-field__resizer">
        <textarea
          :id="inputId"
          v-model="inputValue"
          :class="className.input"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :minlength="minlength"
          :maxlength="maxlength"
          :rows="rows"
          :cols="cols"
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
        <!-- Character counter (optional) -->
        <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
      </span>
    </template>
    <!-- Input text -->
    <template v-else>
      <span
        v-if="prefixText"
        class="mdc-text-field__affix mdc-text-field__affix--prefix"
        v-text="prefixText"
      ></span>
      <input
        :id="inputId"
        v-model="inputValue"
        :type="inputType"
        :class="className.input"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :pattern="pattern"
        :minlength="minlength"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
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
      <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
    </template>

    <!-- Trailing icon (optional) -->
    <slot
      name="after"
      :iconClass="`${UI_TEXTFIELD_ICON.cssClasses.icon} ${UI_TEXTFIELD_ICON.cssClasses.trailingIcon}`"
    ></slot>

    <!-- Label text -->
    <mdc-floating-label v-if="!noLabel && !isOutlined" :for="inputId">
      <slot>{{ label }}</slot>
    </mdc-floating-label>

    <!-- Activation indicator -->
    <mdc-notched-outline v-if="isOutlined" :has-label="!noLabel">
      <mdc-floating-label :for="inputId">
        <slot>{{ label }}</slot>
      </mdc-floating-label>
    </mdc-notched-outline>
    <mdc-line-ripple v-else></mdc-line-ripple>

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
import MdcFloatingLabel from '../form-controls/mdc-floating-label.vue';
import MdcLineRipple from '../form-controls/mdc-line-ripple.vue';
import MdcNotchedOutline from '../form-controls/mdc-notched-outline.vue';
import MdcTextfieldCounter from './mdc-textfield-counter.vue';
import domMixin from '../../mixins/dom';
import textfieldMixin from '../../mixins/textfield';
import typeMixin from '../../mixins/type';
import inputMixin from '../../mixins/input';
import {
  UI_HELPER_TEXT,
  instanceMap,
  componentHelperTextMixin
} from '../../mixins/helper-text';
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
    INPUT: 'update:modelValue',
    KEYUP: 'keyup',
    CHANGE: 'change',
    ENTER: 'enter',
    BLUR: 'blur'
  },
  PLUS_COMPONENTS: ['UiAutocomplete', 'UiDatepicker']
};

export default {
  name: 'UiTextfield',
  components: {
    MdcFloatingLabel,
    MdcLineRipple,
    MdcNotchedOutline,
    MdcTextfieldCounter
  },
  mixins: [
    domMixin,
    textfieldMixin,
    typeMixin,
    inputMixin,
    componentHelperTextMixin
  ],
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
    modelValue: {
      type: [String, Number, Array], // NOTE: Array for `<ui-datepicker>`
      default: ''
    },
    // common attributes
    minlength: {
      type: [String, Number, null],
      default: null
    },
    maxlength: {
      type: [String, Number, null],
      default: null
    },
    // <input> attributes
    inputType: {
      type: String,
      default: 'text'
    },
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
    prefixText: {
      type: String,
      default: ''
    },
    suffixText: {
      type: String,
      default: ''
    },
    withCounter: {
      type: Boolean,
      default: false
    },
    // For plus
    plus: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    UI_TEXTFIELD.EVENT.FOCUS,
    UI_TEXTFIELD.EVENT.KEYDOWN,
    UI_TEXTFIELD.EVENT.INPUT,
    UI_TEXTFIELD.EVENT.KEYUP,
    UI_TEXTFIELD.EVENT.CHANGE,
    UI_TEXTFIELD.EVENT.ENTER,
    UI_TEXTFIELD.EVENT.BLUR
  ],
  data() {
    return {
      UI_TEXTFIELD,
      UI_TEXTFIELD_ICON,
      $textField: null,
      inputValue: this.modelValue
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_TEXTFIELD.TYPES, 'outlined');
    },
    isTextarea() {
      return this.inputType === 'textarea';
    },
    hasLeadingIcon() {
      return !!(
        this.materialIcon ||
        this.withLeadingIcon ||
        this.hasBeforeSlot()
      );
    },
    hasTrailingIcon() {
      return !!(this.withTrailingIcon || this.hasAfterSlot());
    },
    noLabel() {
      const hasLabel = this.label || this.$slots.default;
      return !!(this.placeholder || !hasLabel);
    },
    className() {
      return {
        outer: {
          'mdc-text-field': true,
          'mdc-text-field--filled': !this.isOutlined,
          'mdc-text-field--outlined': this.isOutlined,
          'mdc-text-field--fullwidth': this.fullwidth,
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
    modelValue(val, oldVal) {
      this.inputValue = val;

      if (this.$textField) {
        // fix(ui): dynamic assignment bug
        if (!oldVal && val) {
          this.$textField.value = val;
        }

        // fix(ui): focus bug
        if (oldVal && !val) {
          setTimeout(() => {
            this.$textField.foundation.deactivateFocus();
          }, 1);
        }
      }
    }
  },
  mounted() {
    this.$textField = new MDCTextField(this.el);

    if (this.helperTextId) {
      instanceMap.set(`${this.helperTextId}-previous`, this.$textField);
    }
  },
  methods: {
    hasBeforeSlot() {
      return this.$parent &&
        typeof this.$parent.$.type === 'object' &&
        UI_TEXTFIELD.PLUS_COMPONENTS.includes(this.$parent.$.type.name)
        ? this.$parent.hasLeadingIcon
        : this.$slots.before;
    },
    hasAfterSlot() {
      return this.$parent &&
        typeof this.$parent.$.type === 'object' &&
        UI_TEXTFIELD.PLUS_COMPONENTS.includes(this.$parent.$.type.name)
        ? this.$parent.hasTrailingIcon
        : this.$slots.after;
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
      // fix(@material-components): valid bug on blur
      if (instanceMap.get(`${this.helperTextId}-next`)) {
        const helperText = instanceMap.get(`${this.helperTextId}-next`);
        if (helperText.validMsg !== true) {
          helperText.$emit(UI_HELPER_TEXT.EVENT.CHANGE, false);
        }
      }

      this.$emit(UI_TEXTFIELD.EVENT.BLUR, event);
    }
  }
};
</script>
