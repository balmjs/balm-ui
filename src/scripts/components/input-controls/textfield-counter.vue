<template>
  <!-- Character counter (optional) -->
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-character-counter"></div>
  </div>
</template>

<script>
export default {
  name: 'ui-textfield-counter',
  mounted() {
    if (
      !this.$el.previousElementSibling
        .querySelector('input')
        .getAttribute('maxlength')
    ) {
      console.warn(
        'The `maxlength` attribute is required in the textfield with character counter'
      );
    }
  }
};
</script>
