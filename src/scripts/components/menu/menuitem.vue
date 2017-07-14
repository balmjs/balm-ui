<template>
  <li class="mdc-list-item" :role="role" :tabindex="item.index || 0">
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
  }
};
</script>
