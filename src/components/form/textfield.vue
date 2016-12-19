<template>
  <div :class="className.outer">
    <label class="mdl-button mdl-js-button mdl-button--icon" v-if="plus" :for="id">
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
        v-model="currentValue"
        @input="handleInput"></textarea>
      <input class="mdl-textfield__input"
        v-if="!isTextarea"
        :type="type"
        :id="id"
        :name="name"
        :placeholder="currentPlaceholder"
        :pattern="pattern"
        :value="currentValue"
        @input="handleInput">
      <label class="mdl-textfield__label" :for="id">
        <slot name="label">{{ label }}</slot>
      </label>
      <span class="mdl-textfield__error" v-if="!noError">
        <slot name="error">{{ error }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
import '../../material-design-lite/textfield/textfield';

const CALLBACK_INPUT = 'input';

export default {
  name: 'ui-textfield',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    plus: {
      type: Boolean,
      default: false
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
    model: {
      type: String,
      required: true,
      default: ''
    },
    error: String,
    noError: {
      type: Boolean,
      default: false
    },
    pattern: String,
    rows: {
      type: Number,
      default: 2
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
          'mdl-textfield--expandable': this.plus,
          'mdl-textfield--left-label': this.labelLeft
        },
        inner: {
          'mdl-textfield__expandable-holder': this.plus,
          'mdl-input__expandable-holder': this.labelLeft
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
      this.$emit(CALLBACK_INPUT, this.currentValue);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el);
  }
};
</script>
