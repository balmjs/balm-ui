<template>
  <p :class="className" :id="id">
    <slot>{{ text }}</slot>
  </p>
</template>

<script>
export default {
  name: 'ui-textfield-helptext',
  props: {
    id: String,
    show: {
      type: Boolean,
      default: false
    },
    text: String
  },
  computed: {
    className() {
      return {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.show || this.text,
        'mdc-textfield-helptext--validation-msg': this.text
      };
    }
  }
};
</script>
