<template>
  <li class="mdc-list-item"
      :role="role"
      :tabindex="tabindex(item)"
      :aria-hidden="item.disabled">
    <slot>{{ item[label] }}</slot>
  </li>
</template>

<script>
// TODO: icon
export default {
  name: 'ui-menuitem',
  props: {
    // ui attributes
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    label: {
      type: String,
      default: 'label'
    },
    role: {
      type: String,
      default: 'menuitem'
    }
  },
  methods: {
    tabindex(item) {
      let index = item.index || 0;

      if (item.disabled) {
        index = -1;
      }

      return index;
    }
  }
};
</script>
