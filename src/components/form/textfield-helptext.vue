<template>
  <p :class="className" :id="id">
    <slot>{{ validationMsg }}</slot>
  </p>
</template>

<script>
export default {
  name: 'ui-textfield-helptext',
  props: {
    id: String,
    persistent: {
      type: Boolean,
      default: false
    },
    validationMsg: String
  },
  computed: {
    className() {
      return {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.persistent || this.validationMsg,
        'mdc-textfield-helptext--validation-msg': this.validationMsg
      };
    }
  }
};
</script>
