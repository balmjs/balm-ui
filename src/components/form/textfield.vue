<template>
  <div :class="className.outer">
    <label v-if="plus" class="mdl-button mdl-js-button mdl-button--icon" :for="id">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </label>
    <div :class="className.inner">
      <textarea v-if="isTextarea" class="mdl-textfield__input" :id="id" :name="name" :rows="rows" :placeholder="currentPlaceholder" v-model="currentValue"></textarea>
      <input v-if="!isTextarea" class="mdl-textfield__input" type="text" :id="id" :name="name" :placeholder="currentPlaceholder" :pattern="pattern" v-model="currentValue">
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
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
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
    },
    currentValue(val) {
      this.$emit(CALLBACK_INPUT, val);
    }
  }
};
</script>

<style scoped>
.mdl-textfield--left-label {
  padding: 0;
}

.mdl-textfield--left-label .mdl-input__expandable-holder {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
  align-items: stretch;
}

.mdl-textfield--left-label .mdl-input__expandable-holder > * {
  position: static;
  /* change it */
  width: 50%;
}

.mdl-textfield--left-label .mdl-input__expandable-holder > label {
  visibility: visible !important;
  /* add it */
  /* width: 50px; */
}
</style>
