<template>
  <li ref="item"
    :class="[$parent.className.inner, {'selected': item.selected}]"
    :disabled="item.disabled"
    @click="handleClick(item)">
    <slot>{{ item.label }}</slot>
    <span v-if="$parent.effect"
      ref="ripple"
      class="mdl-menu__item-ripple-container">
      <span class="mdl-ripple"></span>
    </span>
  </li>
</template>

<script>
const EVENT_CLICKED = 'clicked';

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
  methods: {
    handleClick(data) {
      if (!data.disabled) {
        this.$emit(EVENT_CLICKED, data);
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
