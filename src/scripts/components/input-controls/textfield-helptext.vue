<template>
  <p :class="className" :id="id">
    <slot>{{ msg }}</slot>
  </p>
</template>

<script>
export default {
  name: 'ui-textfield-helptext',
  props: {
    // state
    show: {
      type: Boolean,
      default: false
    },
    // element attributes
    id: String,
    // ui attributes
    msg: String
  },
  computed: {
    className() {
      return {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.show,
        'mdc-textfield-helptext--validation-msg': this.msg
      };
    }
  }
};
</script>
