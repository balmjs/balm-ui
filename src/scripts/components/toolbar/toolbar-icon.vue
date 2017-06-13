<template>
  <a :class="className">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </a>
</template>

<script>
const TYPE_MENU = 'menu';
const TYPE_ICON = 'icon';

export default {
  name: 'ui-toolbar-icon',
  props: {
    // ui attributes
    type: {
      type: String,
      default: TYPE_ICON
    }
  },
  computed: {
    isMenu() {
      return this.type.toLowerCase() === TYPE_MENU;
    },
    className() {
      return [
        'material-icons',
        this.isMenu ? 'mdc-toolbar__icon--menu' : 'mdc-toolbar__icon'
      ];
    }
  }
};
</script>
