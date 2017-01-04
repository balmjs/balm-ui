<template>
  <div :class="className.outer">
    <label class="mdl-button mdl-js-button mdl-button--icon" v-if="expandable" :for="id">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </label>
    <div :class="className.inner">
      <textarea class="mdl-textfield__input"
        v-if="isTextarea"
        :id="id"
        :name="name"
        :rows="rows"
        :placeholder="currentPlaceholder"
        :value="currentValue"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"></textarea>
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
        @input="handleInput">
      <label class="mdl-textfield__label" :for="id">
        <slot name="label">{{ label }}</slot>
      </label>
      <span class="mdl-textfield__error" v-if="error">
        <slot name="error">{{ error }}</slot>
      </span>
      <span class="mdl-textfield__plus" v-if="plus">
        <slot name="plus"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import '../../material-design-lite/textfield/textfield';

const EVENT_INPUT = 'input';

export default {
  name: 'ui-textfield',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    model: {
      type: String,
      required: true,
      default: ''
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
    maxlength: Number, // TODO: counter
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
