<template>
  <ui-form-field :class="className.outer"
                 :alignEnd="alignEnd"
                 :dark="dark">
    <label :class="className.label" :for="id">
      <slot name="label">{{ label }}</slot>
    </label>
    <template v-if="isMultiLine">
      <textarea :class="className.input"
                :id="id"
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
                :v-model="model"
                :aria-controls="helptext"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @keydown="handleKeydown"
                @keydown.enter="handleKeydownEnter"></textarea>
    </template>
    <template v-else>
      <input :type="type"
             :class="className.input"
             :id="id"
             :autocomplete="autocomplete"
             :disabled="disabled"
             :maxlength="maxlength"
             :minlength="minlength"
             :name="name"
             :pattern="pattern"
             :placeholder="placeholder"
             :readonly="readonly"
             :required="required"
             :value="model"
             :aria-controls="helptext"
             @focus="handleFocus"
             @blur="handleBlur"
             @input="handleInput"
             @keydown="handleKeydown"
             @keydown.enter="handleKeydownEnter">
    </template>
    <slot></slot>
  </ui-form-field>
</template>

<script>
import {MDCTextfield} from '../../material-components-web/textfield';
import UiFormField from './form-field';

const UI_EVENT_FOCUS = 'focus';
const UI_EVENT_BLUR = 'blur';
const UI_EVENT_INPUT = 'input';
const UI_EVENT_KEYDOWN = 'keydown';
const UI_EVENT_KEYDOWN_ENTER = 'enter';

export default {
  name: 'ui-textfield',
  components: {
    UiFormField
  },
  props: {
    // common attribute
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
    value: String,
    // input attribute
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    // textarea attribute
    rows: {
      type: [Number, String],
      default: 1
    },
    cols: {
      type: [Number, String],
      default: 20
    },
    // attributes: Object, // TODO
    // mdc
    label: String,
    floatAbove: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    // helptext
    helptext: String,
    // form field
    alignEnd: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $textfield: null,
      model: this.value
    };
  },
  computed: {
    isMultiLine() {
      return this.type.toLowerCase() === 'textarea';
    },
    className() {
      return {
        outer: {
          'mdc-textfield': true,
          'mdc-textfield--multiline': this.isMultiLine,
          'mdc-textfield--fullwidth': this.fullwidth,
          'mdc-textfield--dense': this.dense,
          'mdc-textfield--disabled': this.disabled
        },
        label: {
          'mdc-textfield__label': true,
          'mdc-textfield__label--float-above': this.floatAbove && this.model
        },
        input: {
          'mdc-textfield__input': true
        }
      };
    }
  },
  watch: {
    value(val) {
      this.model = val;
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit(UI_EVENT_FOCUS, event);
    },
    handleBlur(event) {
      this.$emit(UI_EVENT_BLUR, event);
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
  },
  mounted() {
    if (!this.$textfield) {
      this.$textfield = new MDCTextfield(this.$el);
    }
  }
};
</script>
