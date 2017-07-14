<template>
  <span :class="className">
    <slot>{{ icon }}</slot>
  </span>
</template>

<script>
export default {
  name: 'ui-item-start',
  props: {
    // ui attributes
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    className() {
      return {
        'mdc-list-item__start-detail': true,
        'material-icons': this.icon
      };
    }
  }
};
</script>
