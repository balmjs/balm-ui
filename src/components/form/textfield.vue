<template>
  <div :class="className.outer">
    <label v-if="plus" class="mdl-button mdl-js-button mdl-button--icon" :for="id">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </label>
    <div :class="className.inner">
      <textarea v-if="isTextarea" class="mdl-textfield__input" :id="id" :name="name" :rows="rows" v-model="currentValue"></textarea>
      <input v-if="!isTextarea" class="mdl-textfield__input" type="text" :id="id" :name="name" :pattern="pattern" v-model="currentValue">
      <label class="mdl-textfield__label" :for="id">
        <slot name="label">
          <span v-text="label"></span>
        </slot>
      </label>
      <span class="mdl-textfield__error" v-if="!noError">
        <slot name="error">
          <span v-text="error"></span>
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
import mdlTextfield from '../../styles/textfield/textfield';

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
    name: {
      type: String,
      required: true
    },
    label: String,
    floatingLabel: {
      type: Boolean,
      default: false
    },
    value: String,
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
          'mdl-textfield--floating-label': this.floatingLabel,
          'mdl-textfield--expandable': this.plus
        },
        inner: this.plus ? {
          'mdl-textfield__expandable-holder': this.isTextarea,
          'mdl-input__expandable-holder': !this.isTextarea
        } : {}
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  }
};
</script>
