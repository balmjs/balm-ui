<template>
  <div :class="className.outer">
    <label v-if="expandable" class="mdl-button mdl-js-button mdl-button--icon" :for="id">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </label>
    <div :class="[className.inner, {'is-expand': isExpand}]">
      <label class="mdl-textfield__label">
        <slot name="label">{{ label }}</slot>
      </label>
      <template v-if="isTextarea">
        <textarea class="mdl-textfield__input"
          v-model="currentValue"
          :id="id"
          :name="name"
          :rows="rows"
          :placeholder="labelFloating ? null : placeholder"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput($event.target.value)"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
          @keydown.enter="handleKeydownEnter"></textarea>
      </template>
      <template v-else>
        <input class="mdl-textfield__input"
          :type="type"
          :value="currentValue"
          :id="id"
          :name="name"
          :placeholder="labelFloating ? null : placeholder"
          :pattern="pattern"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput($event.target.value)"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
          @keydown.enter="handleKeydownEnter"
          data-input>
      </template>
      <span v-if="error" class="mdl-textfield__error">
        <slot name="error">{{ error }}</slot>
      </span>
      <span v-if="plus" class="mdl-textfield__plus">
        <slot name="plus"><!-- counter --></slot>
      </span>
      <div v-if="isExpand" class="mdl-textfield__expand">
        <slot name="expand"><!-- autocomplete --></slot>
      </div>
    </div>
  </div>
</template>

<script>
import '../../material-design-lite/textfield/textfield';

const EVENT_INPUT = 'input';
const EVENT_CHANGE = 'change';
const EVENT_FOCUS = 'focus';
const EVENT_BLUR = 'blur';
const EVENT_KEYDOWN = 'keydown';
const EVENT_KEYDOWN_ENTER = 'enter';

export default {
  name: 'ui-textfield',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    model: {
      required: true
    },
    id: String,
    name: String,
    label: String,
    labelFloating: {
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
      currentValue: this.model,
      isFocus: false,
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
          'mdl-textfield--plus': this.plus,
          'is-textarea': this.isTextarea,
          'is-focused': this.isFocus
        },
        inner: {
          'mdl-textfield__expandable-holder': this.expandable,
          'mdl-input__expandable-holder': this.plus
        }
      };
    },
    isExpand() {
      return this.expand;
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
      this.checkDirty();
    }
  },
  methods: {
    checkDirty(isFocus = true) {
      if (this.label) {
        this.isFocus = isFocus;
        // for dynamic assignment
        this.className.outer['is-dirty'] = this.currentValue.length;
      }
    },
    handleInput(value) {
      this.$emit(EVENT_INPUT, value);
    },
    handleChange(event) {
      this.$emit(EVENT_CHANGE, event);
    },
    handleFocus(event) {
      this.checkDirty();
      this.$emit(EVENT_FOCUS, event);
    },
    handleBlur(event) {
      this.checkDirty(false);
      this.$emit(EVENT_BLUR, event);
    },
    handleKeydown(event) {
      this.$emit(EVENT_KEYDOWN, event);
    },
    handleKeydownEnter(event) {
      this.$emit(EVENT_KEYDOWN_ENTER, event);
    }
  },
  created() {
    if (this.labelFloating && !this.label) {
      console.warn('Labelfloating textfield need a label.');
    }
    if (this.expandable && !this.id) {
      console.warn('Expandable textfield need an id.');
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialTextfield');
  }
};
</script>
