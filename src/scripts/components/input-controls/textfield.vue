<template>
  <ui-form-field :class="className.outer"
                 :noWrap="noFormField"
                 :block="block"
                 :alignEnd="alignEnd"
                 :dark="dark">
    <template v-if="leadingIcon">
      <ui-icon v-if="isMaterialIcon" :class="'mdc-textfield__icon'" :tabindex="clickable">
        {{ leadingIcon }}
      </ui-icon>
      <span v-else class="mdc-textfield__icon mdc-textfield__custom-icon">
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
              :v-model="currentValue"
              :class="className.input"
              :autocomplete="autocomplete"
              :disabled="disabled"
              :maxlength="maxlength"
              :minlength="minlength"
              :name="name"
              :placeholder="placeholder"
              :readonly="readonly"
              :required="required"
              :rows="rows"
              :cols="cols"
              :aria-controls="helptextId"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="handleInput"
              @keydown="handleKeydown"
              @keydown.enter="handleKeydownEnter"></textarea>
    <!-- Input -->
    <input v-else
           :id="id"
           ref="input"
           :type="type"
           :class="className.input"
           :autocomplete="autocomplete"
           :disabled="disabled"
           :maxlength="maxlength"
           :minlength="minlength"
           :name="name"
           :pattern="pattern"
           :placeholder="placeholder"
           :readonly="readonly"
           :required="required"
           :value="currentValue"
           :aria-controls="helptextId"
           @focus="handleFocus"
           @blur="handleBlur"
           @input="handleInput"
           @keydown="handleKeydown"
           @keydown.enter="handleKeydownEnter">
    <label v-if="!cssOnly" :class="className.label" :for="id">
      <slot>{{ label }}</slot>
    </label>
    <template v-if="trailingIcon">
      <ui-icon v-if="isMaterialIcon" :class="'mdc-textfield__icon'" :tabindex="clickable">
        {{ trailingIcon }}
      </ui-icon>
      <span v-else class="mdc-textfield__icon mdc-textfield__custom-icon">
        <slot name="after"></slot>
      </span>
    </template>
    <template v-else>
      <slot name="after"></slot>
    </template>
    <div v-if="!(cssOnly || isMultiLine)" class="mdc-textfield__bottom-line"></div>
  </ui-form-field>
</template>

<script>
import {MDCTextfield} from '../../../material-components-web/textfield';
import UiFormField from './form-field';
import UiIcon from '../icon';
import {isString, detectIE} from '../../helpers'
import formFieldMixin from '../../mixins/form-field';

const UI_EVENT_FOCUS = 'focus';
const UI_EVENT_BLUR = 'blur';
const UI_EVENT_INPUT = 'input';
const UI_EVENT_KEYDOWN = 'keydown';
const UI_EVENT_KEYDOWN_ENTER = 'enter';

export default {
  name: 'ui-textfield',
  components: {
    UiFormField,
    UiIcon
  },
  mixins: [
    formFieldMixin
  ],
  props: {
    // state
    model: [String, Number],
    // element attributes
    id: String,
    name: String,
    autocomplete: String,
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: [Number, String],
    minlength: [Number, String],
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    // input attributes
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    // textarea attributes
    rows: {
      type: [Number, String],
      default: 1
    },
    cols: {
      type: [Number, String],
      default: 20
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    label: String,
    floatAbove: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    box: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    leadingIcon: {
      type: [String, Boolean],
      default: false
    },
    trailingIcon: {
      type: [String, Boolean],
      default: false
    },
    clickable: {
      type: [Number, Boolean],
      default: 0
    },
    // helptext
    helptextId: String
  },
  data() {
    return {
      $textfield: null,
      currentValue: this.model
    };
  },
  computed: {
    isMaterialIcon() {
      return isString(this.leadingIcon) || isString(this.trailingIcon);
    },
    isMultiLine() {
      return this.type.toLowerCase() === 'textarea';
    },
    noFormField() {
      return this.noWrap || this.cssOnly || this.isMultiLine;
    },
    className() {
      return {
        outer: {
          'mdc-textfield': true,
          'mdc-textfield--textarea': this.isMultiLine,
          'mdc-textfield--disabled': this.disabled,
          'mdc-textfield--box': this.box,
          'mdc-textfield--dense': this.dense,
          'mdc-textfield--with-leading-icon': this.leadingIcon,
          'mdc-textfield--with-trailing-icon': this.trailingIcon,
          'mdc-textfield--fullwidth': this.fullwidth,
          'mdc-textfield--upgraded': !this.cssOnly
        },
        label: {
          'mdc-textfield__label': true,
          'mdc-textfield__label--float-above': this.floatAbove && this.currentValue
        },
        input: {
          'mdc-textfield__input': true
        }
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    if (!this.$textfield && !this.cssOnly) {
      this.$textfield = new MDCTextfield(this.$el);
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit(UI_EVENT_FOCUS, event);
    },
    handleBlur() {
      let result = {};

      let ie = detectIE();
      if (!(ie && ie < 10)) {
        let input = this.$refs.input;

        let valid = input.checkValidity();
        let validity = input.validity;
        let message = input.validationMessage;

        result = {
          valid,
          validity,
          message
        };
      }

      this.$emit(UI_EVENT_BLUR, result);
    },
    handleInput(event) {
      this.$emit(UI_EVENT_INPUT, event.target.value);
    },
    handleKeydown(event) {
      this.$emit(UI_EVENT_KEYDOWN, event);
    },
    handleKeydownEnter(event) {
      this.$emit(UI_EVENT_KEYDOWN_ENTER, event.target.value);
    }
  }
};
</script>
