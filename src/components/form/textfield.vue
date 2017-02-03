<template>
  <div :class="className.outer">
    <label class="mdl-button mdl-js-button mdl-button--icon" v-if="expandable" :for="id">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </label>
    <div :class="[className.inner, {'is-expand': isExpand}]">
      <label class="mdl-textfield__label" :for="id">
        <slot name="label">{{ label }}</slot>
      </label>
      <textarea class="mdl-textfield__input"
        v-if="isTextarea"
        :id="id"
        :name="name"
        :rows="rows"
        :placeholder="currentPlaceholder"
        v-model="currentValue"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"></textarea>
      <input class="mdl-textfield__input"
        v-if="!isTextarea"
        :type="type"
        :id="id"
        :name="name"
        :placeholder="currentPlaceholder"
        :pattern="pattern"
        :value="currentValue"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        data-input>
      <span class="mdl-textfield__error" v-if="error">
        <slot name="error">{{ error }}</slot>
      </span>
      <span class="mdl-textfield__plus" v-if="plus">
        <slot name="plus"><!-- counter --></slot>
      </span>
      <div class="mdl-textfield__expand" v-if="isExpand">
        <slot name="expand"><!-- autocomplete --></slot>
      </div>
    </div>
  </div>
</template>

<script>
import '../../material-design-lite/textfield/textfield';

const EVENT_INPUT = 'input';
const EVENT_FOCUS = 'focus';
const EVENT_BLUR = 'blur';
const EVENT_KEYDOWN = 'keydown';

export default {
  name: 'ui-textfield',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    model: {
      type: String,
      required: true
    },
    id: String,
    name: String,
    label: String,
    labelFloating: {
      type: Boolean,
      default: false
    },
    labelLeft: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    pattern: String,
    error: String,
    maxlength: Number,
    rows: {
      type: Number,
      default: 2
    },
    expandable: {
      type: Boolean,
      default: false
    },
    plus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.model
    };
  },
  computed: {
    isTextarea() {
      return this.type.toLowerCase() === 'textarea';
    },
    className() {
      return {
        outer: {
          'mdl-textfield': true,
          'mdl-js-textfield': true,
          'mdl-textfield--floating-label': this.labelFloating,
          'mdl-textfield--expandable': this.expandable,
          'mdl-textfield--left-label': this.labelLeft,
          'mdl-textfield--plus': this.plus
        },
        inner: {
          'mdl-textfield__expandable-holder': this.expandable,
          'mdl-input__expandable-holder': this.labelLeft || this.plus
        }
      };
    },
    currentPlaceholder() {
      return this.labelLeft && this.placeholder;
    },
    isExpand() {
      return this.expand;
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleInput() {
      this.$emit(EVENT_INPUT, this.currentValue);
    },
    handleFocus() {
      this.$emit(EVENT_FOCUS);
    },
    handleBlur(event) {
      this.$emit(EVENT_BLUR, event);
    },
    handleKeydown(event) {
      this.$emit(EVENT_KEYDOWN, event);
    }
  },
  created() {
    if (this.expandable && !this.id) {
      console.warn('Expandable textfield need an id.');
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialTextfield');
  }
};
</script>
