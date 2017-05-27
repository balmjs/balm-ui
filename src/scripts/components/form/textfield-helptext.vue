<template>
  <p :class="className" :id="id">
    <slot>{{ text }}</slot>
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
    text: String
  },
  computed: {
    className() {
      return {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.show,
        'mdc-textfield-helptext--validation-msg': this.text
      };
    }
  }
};
</script>
