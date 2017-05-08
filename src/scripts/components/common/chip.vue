<template>
  <span :class="className">
    <slot name="icon" :className="contactClassName"></slot>
    <span class="mdl-chip__text">
      <slot></slot>
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
    icon: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    }
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
        'mdl-chip--contact': this.icon,
        'mdl-chip--deletable': this.action
      };
    }
  }
};
</script>
