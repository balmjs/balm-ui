<template>
  <span :class="className">
    <slot>{{ icon }}</slot>
  </span>
</template>

<script>
export default {
  name: 'ui-item-end',
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
        'mdc-list-item__end-detail': true,
        'material-icons': this.icon
      };
    }
  }
};
</script>
