<template>
  <div class="mdc-checkbox">
    <slot>
      <input
        ref="checkbox"
        type="checkbox"
        class="mdc-checkbox__native-control"
        :checked="checked"
      />
    </slot>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
  </div>
</template>

<script>
export default {
  name: 'MdcCheckbox',
  props: {
    checked: {
      type: [Boolean, null],
      default: null
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    indeterminate(val) {
      this.$refs.checkbox.indeterminate = val;
    }
  },
  methods: {
    // For the row checkbox of `<ui-table-header>`
    reset() {
      if (this.$refs.checkbox.indeterminate) {
        this.$refs.checkbox.indeterminate = false;
      } else {
        this.$refs.checkbox.checked = false;
      }
    }
  }
};
</script>
