<template>
  <span :class="className">
    <slot name="contact" :className="contactClassName"></slot>
    <span class="mdl-chip__text">
      <slot>{{ value }}</slot>
    </span>
    <slot name="action" :className="actionClassName"></slot>
  </span>
</template>

<script>
const CLASSNAME_CONTACT = 'mdl-chip__contact';
const CLASSNAME_ACTION = 'mdl-chip__action';

export default {
  name: 'ui-chip',
  props: {
    // Defines an MDL chip as a contact style chip
    contact: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    },
    value: String
  },
  data() {
    return {
      contactClassName: CLASSNAME_CONTACT,
      actionClassName: CLASSNAME_ACTION
    };
  },
  computed: {
    className() {
      return {
        'mdl-chip': true,
        'mdl-chip--contact': this.contact,
        'mdl-chip--deletable': this.deletable
      };
    }
  }
};
</script>
