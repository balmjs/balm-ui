<template>
  <button class="mdc-segmented-button__segment">
    <i v-if="icon" class="material-icons mdc-segmented-button__icon">{{
      icon
    }}</i>
    <div v-if="text" class="mdc-segmented-button__label">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  name: 'UiSegmentedButton',
  props: {
    // UI attributes
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>
