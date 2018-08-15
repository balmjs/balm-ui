<template>
  <li class="mdc-list-item"
    role="menuitem"
    :tabindex="tabindex(item)"
    :aria-disabled="item.disabled">
    <slot>{{ item[label] }}</slot>
  </li>
</template>

<script>
export default {
  name: 'ui-menuitem',
  props: {
    // UI attributes
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    label: {
      type: String,
      default: 'label'
    }
  },
  methods: {
    tabindex(item) {
      return item.disabled ? -1 : item.tabindex || 0;
    }
  }
};
</script>
