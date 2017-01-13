<template>
  <li ref="item"
    :class="$parent.className.inner"
    :disabled="item.disabled">
    <slot>{{ item.name }}</slot>
    <span ref="ripple"
      v-if="$parent.effect"
      class="mdl-menu__item-ripple-container">
      <span class="mdl-ripple"></span>
    </span>
  </li>
</template>

<script>
export default {
  name: 'ui-menuitem',
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  mounted() {
    if (this.$parent.effect) {
      this.$ui.upgradeElement(this.$refs.item, 'MaterialRipple');
    }
  }
};
</script>
